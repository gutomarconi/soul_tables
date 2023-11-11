import React, { ReactNode } from 'react';
import { TIcons } from '../Icon';
import { StyledIcon, ButtonV2Styled, ButtonContentV2 } from './Button.styled';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text'
}

export enum ButtonVariantV2 {
  Primary = 'primary',
  Secondary = 'secondary',
  Text = 'text',
  Warning = 'warning'
}

export interface IButton {
  disabled?: boolean;
  icon?: TIcons;
  iconBefore?: boolean;
  onClick?: () => void;
  'aria-label'?: string;
  variant: ButtonVariant | ButtonVariantV2;
  outline?: boolean;
  children?: ReactNode;
  testId?: string;
  active?: boolean;
}

export const Button: React.FC<IButton> = ({ children, icon, iconBefore, testId, variant, active, ...props }) => (
  <ButtonV2Styled {...props} $isActive={active} variant={variant as ButtonVariantV2} data-testid={testId}>
    <ButtonContentV2 $iconBefore={iconBefore}>
      {children}
      {icon ? <StyledIcon testId="button__icon" $iconBefore={iconBefore} name={icon} size={21} hasLabel={!!children} /> : null}
    </ButtonContentV2>
  </ButtonV2Styled>
);
