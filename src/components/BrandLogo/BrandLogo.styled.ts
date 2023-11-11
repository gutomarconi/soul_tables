import styled from 'styled-components';

export const ANIMATION_TIME_MS = 150;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandImageWrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  justify-content: center;

  svg {
    position: absolute;
    height: 38px;
    left: 18px;
  }
`;
