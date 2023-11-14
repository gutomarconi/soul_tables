import styled, { css } from 'styled-components';
import { ButtonVariantV2 } from '.';
import { Icon } from '../Icon';

interface IButtonProps { 
  variant: ButtonVariantV2, 
  disabled?: boolean, 
  $isActive?: boolean, 
  onClick?: () => void 
};

export const StyledIcon = styled(Icon)<{
  $iconBefore?: boolean;
  hasLabel?: boolean;
}>`
  padding: ${({ $iconBefore = false, hasLabel = true }) => hasLabel ? ($iconBefore ? '0 4px 0 0' : '0 0 0 4px') : '0'};
`;

const DisabledButton = css`
  background: #F1F2F4;
  color: ${({ theme }) => theme.colors.text.secondary};
  border: 1px solid transparent;
`;

const PrimaryButton = css<IButtonProps>`
  border: 1px solid ${({ theme }) => theme.colors.brand.primary};
  &:hover {
    background: ${({ theme }) => theme.colors.brand.primary};
    color: white;
  }
  ${({ $isActive, theme }) => $isActive && css`
    background: ${theme.colors.brand.secondary};
    color: white;
  `}
`;

const SecondaryButton = css<IButtonProps>`
  border-image-slice: 1;
  border-image-source: linear-gradient(to right, #776C7A 9.73%, #2D3748 90.47%);
  &:hover {
    background: linear-gradient(88.65deg, #A9A9A9 -14.61%, #7F7F7F 36.53%, #3C3C3C 103.14%);
    color: white;
  }
  ${({ $isActive }) => $isActive && css`
    background: linear-gradient(88.65deg, #A9A9A9 -14.61%, #7F7F7F 36.53%, #3C3C3C 103.14%);
    color: white;
  `}

`;

const TextButton = css`
  &:hover {
    background: #F1F2F4;
  }
`;

const WarningButton = css<IButtonProps>`
  border: 1px solid #B73A2F;
  background: none;
  &:hover {
    background: ${({ theme }) => theme.colors.status.error};
    color: white;
  }
  ${({ $isActive, theme }) => $isActive && css`
    background: ${theme.colors.status.error};
    color: white;
  `}

`;

export const ButtonV2Styled = styled.button<IButtonProps>`
  font-family: ${({ theme }) => theme.fonts.family.primary};
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  text-decoration: none;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.colors.text.primary};
  background: none;
  ${({ variant, disabled }) => {
    const ButtonStyles = {
      [ButtonVariantV2.Primary]: PrimaryButton,
      [ButtonVariantV2.Secondary]: SecondaryButton,
      [ButtonVariantV2.Text]: TextButton,
      [ButtonVariantV2.Warning]: WarningButton,
    };
    
    return disabled ? DisabledButton : ButtonStyles[variant];
  }};

`;

export const ButtonContentV2 = styled.div<{ $iconBefore?: boolean }>`
  display: flex;
  flex-direction: ${({ $iconBefore = false }) => ($iconBefore ? 'row-reverse' : 'row')};
  align-items: center;
  justify-content: center;
  line-height: 22px;
  font-weight: 500;
`;
