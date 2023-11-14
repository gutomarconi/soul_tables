import styled, { css } from 'styled-components';
import { Button } from '../../../components/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Table = styled.div`
  margin-bottom: 24px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 32px;
  :last-child {
    margin-right: 0;
  }
`;

export const GroupLabel = styled.span`
border-bottom: 1px solid black;
padding-bottom: 8px;
margin-bottom: 16px;
:last-child {
  margin-bottom: 0;
}

`;

export const ButtonStyled = styled(Button)<{ margin?: string, addBorder?: boolean }>`
  ${({ addBorder, theme }) => addBorder && css`
    border: 1px solid ${theme.colors.brand.primary};
  `}
  // ${({ margin }) => margin && css`
  //   margin: ${margin};
  // `}
  margin-bottom: 24px;
`;