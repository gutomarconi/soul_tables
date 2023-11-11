import React, { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { ITheme } from '../../theme';

interface TextFieldStyledProps {
  errorText?: string | undefined;
  clipOverflow?: boolean;
}

// eslint-disable-next-line react/display-name
const InnerInput = forwardRef<
HTMLInputElement,
JSX.IntrinsicElements['input'] & TextFieldStyledProps
>(({ errorText, clipOverflow, ...props }, ref) => <input ref={ref} {...props} />);

export const InputFieldStyled = styled(InnerInput)<{ theme: ITheme; clipOverflow: boolean, small?: boolean, $iconBefore?: boolean, $iconAfter?: boolean, textAlign?: string }>`
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fonts.family.primary};
  text-align: ${({ textAlign = 'left' }) => textAlign};
  font-size: 1rem;
  line-height: calc(
    45px - ${(props) => props.theme.paddings.xs} - ${(props) => props.theme.paddings.xs} - 2px
  );
  color: ${(props) => props.theme.colors.text.primary};
  padding-top: ${(props) => props.theme.paddings.xs};
  padding-bottom: ${(props) => props.theme.paddings.xs};
  padding-left: ${({ theme, $iconBefore }) => $iconBefore ? '3rem' : theme.paddings.s};
  padding-right: ${({ $iconAfter }) => $iconAfter ? '3rem' : '0'};
  outline: none;
  border: 1px solid ${(props) => props.theme.colors.borders.main};
  width: fill-available;
  height: ${({ small }) => small ? '40' : '45'}px;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.brand.secondary};
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:disabled {
    -webkit-text-fill-color: ${(props) => props.theme.colors.text.primary};
    background: ${({ theme }) => theme.colors.backgrounds.content};
  }

  ${({ clipOverflow }) =>
    clipOverflow &&
    css`
      text-overflow: ellipsis;
    `}

  ${({ errorText = '', theme }) =>
    errorText &&
    css`
      border: 1px solid ${theme.colors.status.error};
    `};
`;

export const FieldWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const CharCount = styled.div`
  color: ${({ theme }) => theme.colors.brand.secondary};
  text-align: right;
  font-size: 0.75rem;
  margin-top: 0.25rem;
`;

export const IconWrapper = styled.div<{ $iconBefore: boolean, $hasAction?: boolean, small?: boolean }>`
  ${({ $hasAction }) => $hasAction && css`cursor: pointer;`}
  position: absolute;
  top: 50%;
  transform: translate(0, -65%);
  ${({ $iconBefore }) => $iconBefore ? 'left:' : 'right:'}4px;  
  border: 1px solid transparent;
  padding: ${({ small }) => small ? 6 : 8}px;
  width: 17px;
  height: 17px;
`;