import React, { FC, ReactNode } from 'react';
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { ThemeProvider } from './ThemeProvider';
import { ITheme } from './types';

interface ThemeProviderProps {
  children: ReactNode;
  theme: DefaultTheme;
}

const GlobalStyles = createGlobalStyle<ITheme>`
  html {
    font-size: ${(theme) => theme.fonts.global.baseSize};
    font-family: ${({ theme }) => theme.fonts.family.primary};
  
    @media screen and (max-width: 1191px) {
      font-size: 14px;
      line-height: 1.25;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${(theme) => theme.colors.backgrounds.main};
    color: ${(theme) => theme.colors.text.primary};
  }

  strong {
    font-weight: 600;
  }
  
  ${(theme) => theme.fonts.global.fontFaceCss};
`;

export const DefaultThemeProvider: FC<ThemeProviderProps> = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles {...theme as ITheme} />
    {children}
  </ThemeProvider>
);
