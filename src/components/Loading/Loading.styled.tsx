import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

const animation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
`

export const Dot = styled.div`
width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme.colors.brand.primary};
  border-radius: 50%;
  margin: 0 5px;
  animation: ${animation} 1s infinite ease-in-out;
  :nth-child(2) {
    animation-delay: 0.2s;
  }

  :nth-child(3) {
    animation-delay: 0.4s;
  }
`;