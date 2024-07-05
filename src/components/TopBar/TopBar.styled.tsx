import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.fonts.family.primary};
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borders.main};
  background: rgb(153, 89,60);
  z-index: 1000;
  height: 60px;
  color: white;
  padding: 0 40px;
  min-width: 1100px;
`;

export const Logo = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: bold;
  font-size: 40px;
  cursor: pointer;
  margin-left: 16px;
`;

export const Actions = styled.div`
  display: flex;
  margin-left: 24px;
  flex-direction: column;
  gap: 12px;
`;

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  
`;

export const Links = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const Link = styled.div<{ highlight?: boolean, hideOnMobile?: boolean }>`
  cursor: pointer;
  position: relative;
  ${({ highlight, theme }) => highlight && css`
    font-weight: 600;
    font-size: 18px;
  `}
  &: hover {
    font-weight: bold;
  }
  ${({ hideOnMobile }) => hideOnMobile && css`
    @media (max-width: 1150px) {
      display: none;
    }
  `}
  @media (max-width: 1150px) {
    font-weight: 600;
    font-size: 24px;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  margin-left: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: -webkit-fill-available;
  @media (max-width: 1150px) {
    justify-content: space-between;
  }
`;

export const LogoImg = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 1150px) { 
    width: 60px;
    height: 60px;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  gap: 6px;
  margin-left: 16px;
  font-size: 14px;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
`;

const piscar = keyframes`
  0%, 100% {
      background-color: ${({ theme }) => theme.colors.brand.action};
      color: white;
  }
  50% {
      background-color: ${({ theme }) => theme.colors.brand.action};
      color: black;
  }
}
`;
export const OverlapMessage = styled.span`
  animation: ${piscar} 2s infinite;
  position: absolute;
  top: 26px;
  right: 4px;
  border-radius: 1rem;
  background: ${({ theme }) => theme.colors.brand.action};
  padding: 6px;
  height: 15px;
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(max-width: 1150px) {
    top: 0px;
    right: 0px;
    left: 230px;
    width: 220px;
  }
`;
