import React, { FC } from 'react';
import { useTheme } from 'styled-components';
import { ITheme } from '../../theme';
import { BrandContainer, BrandImageWrapper } from './BrandLogo.styled';

interface IBrandLogoProps {
  small?: boolean;
}

export const BrandLogo: FC<IBrandLogoProps> = ({
  small = false,
}) => {
  const theme = useTheme() as ITheme;
  const IconSmall = theme.brandLogo?.icon ?? '';
  const Icon = theme.brandLogoFull?.icon ?? '';
  const size = small ? 'small' : 'full';

  return (
    <BrandContainer data-testid={`brand-logo__v2__${size}`}>
      <BrandImageWrapper>
        <img src={small ? IconSmall : Icon} alt='test' />
      </BrandImageWrapper>
    </BrandContainer>
  );
};
