import React, {
  useEffect,
  KeyboardEvent,
  MutableRefObject,
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
  ReactNode,
} from 'react';
import { CharCount, FieldWrapper, IconWrapper, InputFieldStyled } from './InputField.styled';
import { stepNumberFieldValue } from './utils';
import { Icon, TIcons } from '../Icon';

interface ITooltipSettings {
  tooltipMessage: string;
  showTooltip: boolean;
}

interface ISpinnerSettings {
  increment: boolean;
  decrement: boolean;
}

export interface IInputField {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  errorText?: string;
  ref?: MutableRefObject<HTMLInputElement>;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  focusOnMount?: boolean;
  type?: string;
  testId?: string;
  step?: number;
  min?: number;
  max?: number;
  clipOverflow?: boolean;
  readOnly?: boolean;
  tooltip?: string;
  small?: boolean;
  hideValidationMessage?: boolean;
  maxLength?: number;
  icon?: TIcons;
  iconBefore?: boolean;
  iconAction?: () => void;
  iconTooltip?: ReactNode;
  textAlign?: string;
}

export const InputField = forwardRef<HTMLInputElement, IInputField>(
  (
    {
      disabled = false,
      onChange = () => {},
      onKeyUp = () => {},
      onKeyDown = () => {},
      focusOnMount = false,
      errorText,
      value = '',
      testId,
      type = 'text',
      min,
      max,
      step = 1,
      clipOverflow = false,
      readOnly,
      tooltip = '',
      hideValidationMessage = false,
      maxLength,
      small,
      icon,
      iconBefore = false,
      iconAction,
      iconTooltip,
      ...rest
    },
    ref,
  ) => {

    const innerRef = useRef<HTMLInputElement>() as MutableRefObject<HTMLInputElement>;

    useImperativeHandle(ref, () => innerRef.current, []);

    useEffect(() => {
      if (focusOnMount && innerRef.current) innerRef.current.focus();
    }, [focusOnMount]);

    const handleChange = (newValue: string) => {
      onChange(newValue);
    };

    return (
      <FieldWrapper>
        {icon ? (
          <IconWrapper $iconBefore={iconBefore} $hasAction={!!iconAction} small={small}>
            <Icon name={icon} onClick={iconAction} />
          </IconWrapper>
        ) : null}
        <InputFieldStyled
          ref={innerRef}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onChange={({ target }) => handleChange(target.value)}
          onBlur={() => value && handleChange(value.trim())}
          value={value}
          data-testid={testId}
          min={min}
          max={max}
          step={step}
          clipOverflow={clipOverflow}
          readOnly={readOnly || clipOverflow}
          disabled={disabled}
          maxLength={maxLength}
          small={small}
          $iconBefore={!!icon && iconBefore}
          $iconAfter={!!icon && !iconBefore}
          {...rest}
        />
      </FieldWrapper>
    );
  },
);
InputField.displayName = 'InputField'