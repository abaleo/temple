pragma solidity ^0.8.4;
// SPDX-License-Identifier: AGPL-3.0-or-later

import "./Exposure.sol";
import "./TreasuryFarmingRevenue.sol";
import "./Vault.sol";

library OpsManagerLib {
    /** 
     * @notice Creates a new exposure and sets it on provided array and mapping
     */
    function createExposure(
        string memory name, 
        string memory symbol, 
        ERC20 revalToken, 
        Exposure[] storage activeExposures, 
        mapping(Exposure => TreasuryFarmingRevenue) storage pools
    ) public returns (Exposure) {
        // Create position and transfer ownership to the caller
        Exposure exposure = new Exposure(name, symbol, revalToken, address(this));
        activeExposures.push(exposure);
        exposure.transferOwnership(msg.sender);

        // Create a FarmingRevenue pool associated with this exposure
        pools[exposure] = new TreasuryFarmingRevenue(exposure);
        exposure.setMinterState(address(pools[exposure]), true);

        return exposure;
    }

    function rebalance(
        Vault vault, 
        Exposure exposure, 
        mapping(Exposure => TreasuryFarmingRevenue) storage pools
    ) public {
        require(vault.inEnterExitWindow(), "FarmingRevenueMnager: Cannot rebalance vaults in their exit/entry window");

        uint256 currentRevenueShare = pools[exposure].shares(address(vault));
        uint256 targetRevenueShare = vault.targetRevenueShare();

        if (targetRevenueShare > currentRevenueShare) {
                pools[exposure].increaseShares(address(vault), targetRevenueShare - currentRevenueShare);
            } else if (targetRevenueShare < currentRevenueShare) {
                pools[exposure].decreaseShares(address(vault), currentRevenueShare - targetRevenueShare);
            } else {
                pools[exposure].claimFor(address(vault));
        }
    }

    /**
     * Return an array, same length as vaults, where each entry is true/false as to if
     * that vault requires a rebalance before updating revenue attributed to a particular
     * exposure
     */
    function requiresRebalance(
        Vault[] memory vaults, 
        Exposure exposure, 
        mapping(Exposure => TreasuryFarmingRevenue
    ) storage pools) public view returns (bool[] memory) {
        bool[] memory requiresUpdate = new bool[](vaults.length);

        for (uint256 i = 0; i < vaults.length; i++) {
            if (vaults[i].inEnterExitWindow()) {
                continue;
            }

            requiresUpdate[i] = pools[exposure].shares(address(vaults[i])) != vaults[i].targetRevenueShare();
        }

        return requiresUpdate;
    }
}