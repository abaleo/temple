import { Button } from 'components/Button/Button';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const VaultContent = ({ children }: PropsWithChildren<{}>) => {
  return <Content>{children}</Content>;
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 90%;
  height: 100%;
`;

export const VaultButton = styled(Button).attrs(
  (props: { marginTop: string }) => props
)`
  align-self: center;
  margin-top: ${(props) => props.marginTop || '0rem'};
  border-radius: 12px;
  letter-spacing: 0.5rem;
  text-transform: uppercase;
  width: 50%;
  transition: none;
`;

export default VaultContent;