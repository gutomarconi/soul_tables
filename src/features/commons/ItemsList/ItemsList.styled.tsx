import styled from 'styled-components';
import { Button } from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonStyled = styled(Button)`
  padding: 0;
  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  margin-right: 6px;
  :last-child {
    margin-right: 0;
  }
`;

export const Quantity = styled.span`
  margin-left: -8px;  
  margin-right: 6px;
`;