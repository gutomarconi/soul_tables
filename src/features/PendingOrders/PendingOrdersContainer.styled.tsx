import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  max-width: 600px;
  margin: 0 auto;
  padding-top: 40px;

`;

export const TablesContainer = styled.div`
  display: grid;
  margin-top: 16px;
  grid-template-columns: 50% 50%;
`;

export const NoOrders = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 32px;
`;