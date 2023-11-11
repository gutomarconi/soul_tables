
export type TColorScheme = 'primary' | 'secondary' | 'outline';
export type TBranding = { brandText: string } & (
  | { icon: string; iconPath?: never }
  | {
    icon?: never;
    iconPath: string;
  }
);

export interface IThemeColors {
  brand: {
    primary: string
    secondary: string
  }
  text: {
    primary: string
    secondary: string
  }
  borders: {
    main: string
  }
  backgrounds: {
    main: string
    content: string
    textOn: string
  }
  status: {
    success: string
    warning: string
    error: string
    disabled: string
    inProgress: string
    cancelled: string
    scheduled: string
    expected: string
    completedWithoutFailures: string
  }
  sidebar: {
    main: string
  }
}

export interface IThemeGradients {
  success: string;
  warning: string;
  danger: string;
}

export interface IThemeComponents {
  sidebar: {
    main: string;
  }
}

export interface ITheme {
  name: string;
  themeVersion?: number;
  isDark?: boolean;
  colors: IThemeColors;
  gradients: IThemeGradients;
  components: IThemeComponents;
  fonts: {
    global: {
      baseSize: string;
      fontFaceCss?: string;
      googleFontUrl?: string;
    };
    family: {
      primary: string;
      secondary: string;
    };
  };
  typography: {
    h1: IThemedTypography;
    h2: IThemedTypography;
    h3: IThemedTypography;
    h4: IThemedTypography;
    p: IThemedTypography;
    label: IThemedTypography;
  };
  spacers: {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  margins: {
    right: string;
    left: string;
    top: string;
    bottom: string;
  };
  paddings: {
    xxxs: string;
    xxs: string;
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
    xxl: string;
  };
  breakpoints: {
    m: string;
  };
  brandLogo: TBranding;
  brandLogoFull?: TBranding;
  favicon: string;
}

export interface IThemedTypography {
  size: string;
  fontWeight: string;
  fontStyle: string;
  lineHeight: string;
  letterSpacing: string;
  margin: string;
}
