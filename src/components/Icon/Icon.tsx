import React from 'react';
import styled from 'styled-components';
import icons from './icons';

const IconWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: flex;
  align-items: center;
`;

export type TIcons = keyof typeof icons;
export interface IIconProps {
  name: TIcons;
  size?: number;
  testId?: string;
  onClick?: () => void;
  className?: string;
}

export const Icon: React.FC<IIconProps> = ({ name, size = 28, className, testId, onClick }) => {
  return (
    <IconWrapper className={className} size={size} data-testid={testId} onClick={onClick}>
      {icons[name]}
    </IconWrapper>
  );
};
