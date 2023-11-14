import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  max-width: 215px;
  cursor: pointer;
  margin-bottom: 12px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export const Table = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Summary = styled.div`
  display: flex;
`;