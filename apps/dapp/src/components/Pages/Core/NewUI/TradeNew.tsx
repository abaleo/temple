import { useState } from 'react';
import { Input } from './HomeInput';
import { TransactionSettingsModal } from 'components/TransactionSettingsModal/TransactionSettingsModal';
import { SwapMode } from '../Trade/types';
import { useSwapController } from '../Trade/use-swap-controller';
import { formatToken } from 'utils/formatter';
import { InvertButton } from '../Trade/styles';
import { INITIAL_STATE } from '../Trade/constants';
import styled from 'styled-components';
import { Button } from 'components/Button/Button';
import { pixelsToRems } from 'styles/mixins';
import { useEffect } from 'react';
import { useNotification } from 'providers/NotificationProvider';
import { TransactionPreviewModal } from 'components/TransactionSettingsModal/TransactionPreviewModal';

export const Trade = () => {
  const {
    state,
    handleSelectChange,
    handleInputChange,
    handleChangeMode,
    handleHintClick,
    handleTxSettingsUpdate,
    handleTransaction,
  } = useSwapController();

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [isSlippageModalOpen, setIsSlippageModalOpen] = useState(false);

  const inputCryptoConfig =
    state.mode === SwapMode.Buy
      ? { ...state.inputConfig, onCryptoChange: handleSelectChange, selected: state.inputToken }
      : state.inputConfig;

  const outputCryptoConfig =
    state.mode === SwapMode.Sell
      ? { ...state.outputConfig, onCryptoChange: handleSelectChange, selected: state.outputToken }
      : state.outputConfig;

  const formatErrorMessage = (errorMessage: string) => {
    const boundary = errorMessage.indexOf('(');
    if (boundary > 0) {
      return errorMessage.substring(0, boundary - 1);
    }
    return errorMessage.substring(0, 20).concat('...');
  };

  const { openNotification } = useNotification();

  useEffect(() => {
    if (state.error) {
      openNotification({
        title: `Error: ${formatErrorMessage(state.error.message)}`,
        hash: new Date().getTime().toString(),
        isError: true,
      });
    }
  }, [state.error]);

  return (
    <>
      <TransactionSettingsModal
        isOpen={isSlippageModalOpen}
        defaultSlippage={INITIAL_STATE.slippageTolerance}
        onClose={() => setIsSlippageModalOpen(false)}
        onChange={(settings) => handleTxSettingsUpdate(settings)}
      />
      <TransactionPreviewModal
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
        state={state}
        handleTransaction={handleTransaction}
      />
      <HeaderText>Trade</HeaderText>
      <SwapContainer>
        <InputsContainer>
          <Input
            crypto={inputCryptoConfig}
            handleChange={handleInputChange}
            isNumber
            value={state.inputValue}
            placeholder="0"
            onHintClick={handleHintClick}
            min={0}
            hint={`Balance: ${formatToken(state.inputTokenBalance, state.inputToken)}`}
          />
          <Spacer />
          <Input
            crypto={outputCryptoConfig}
            value={formatToken(state.quote?.returnAmount, state.outputToken)}
            hint={`Balance: ${formatToken(state.outputTokenBalance, state.outputToken)}`}
            disabled
          />
          <InvertButton onClick={handleChangeMode} />
        </InputsContainer>
        <AdvancedSettingsButton onClick={() => setIsSlippageModalOpen(true)}>Advanced Settings</AdvancedSettingsButton>
        <TradeButton
          disabled={!state.quote || state.quote.returnAmount.lte(0)}
          label="Preview"
          onClick={() => setIsPreviewModalOpen(true)}
        />
      </SwapContainer>
    </>
  );
};

const Spacer = styled.div`
  height: ${pixelsToRems(10)}rem;
`;

const InputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const TradeButton = styled(Button)`
  padding: 10px;
  gap: 20px;
  width: 120px;
  height: 52px;
  background: linear-gradient(180deg, #353535 45.25%, #101010 87.55%);
  border: 1px solid #95613f;
  box-shadow: 0px 0px 20px rgba(222, 92, 6, 0.4);
  border-radius: 10px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #ffdec9;
`;

const AdvancedSettingsButton = styled.div`
  height: 18px;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 153.11%;
  text-align: center;
  letter-spacing: 0.095em;
  text-decoration-line: underline;
  color: #bd7b4f;
  margin: 10px;
  cursor: pointer;
`;

const HeaderText = styled.div`
  height: 32px;
  padding: 40px;
  font-size: 36px;
  line-height: 42px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffdec9;
`;

const SwapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
