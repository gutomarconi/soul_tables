import { IThemedTypography, ITheme } from '../types';
import Logo from './assets/soul.jpg';


const defaultTypography: IThemedTypography = {
  size: '1rem',
  fontWeight: 'normal',
  fontStyle: 'normal',
  lineHeight: 'auto',
  letterSpacing: '0',
  margin: '0 0 0 0',
};

export const defaultTheme: ITheme = {
  name: 'Default Theme',
  themeVersion: 2,
  isDark: true,
  colors: {
    brand: {
      primary: '#99593c',
      secondary: '#19556B'
    },
    text: {
      primary: '#2D3748',
      secondary: '#6E6C7A'
    },
    borders: {
      main: '#DDDFE4'
    },
    backgrounds: {
      main: '#F1F2F4',
      content: '#F7F8F9',
      textOn: 'white'
    },
    status: {
      success: '#4EAC5B',
      warning: '#F29D38',
      error: '#B73A2F',
      disabled: '#6E6C7A',
      inProgress: '#7F7F7F',
      cancelled: '#D4D4D4',
      scheduled: '#3C3C3C',
      expected: '#3C3C3C',
      completedWithoutFailures: '#1B7928'
    },
    sidebar: {
      main: '#103745'
    }
  },
  gradients: {
    success: 'linear-gradient(73.14deg, #1FC1F0 9.73%, #1FC1F0 19.82%, #A034F9 80.36%, #A034F9 90.47%)',
    warning: 'linear-gradient(88.65deg, #1FC1F0 -14.61%, rgba(24, 71, 237, 0.69) 36.53%, #A034F9 103.14%)',
    danger: 'linear-gradient(88.65deg, #A9A9A9 -14.61%, #7F7F7F 36.53%, #3C3C3C 103.14%)'
  },
  components: {
    sidebar: {
      main: '#131418'
    }
  },
  fonts: {
    global: {
      baseSize: '16px',
      googleFontUrl: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap'
    },
    family: {
      primary: '"Poppins", sans-serif',
      secondary: '"Poppins", sans-serif',
    },
  },
  typography: {
    h1: { ...defaultTypography, size: '3rem', margin: '0 0 16px 0', fontWeight: '600' },
    h2: { ...defaultTypography, size: '2.25rem', margin: '0 0 19px 0', fontWeight: '600' },
    h3: {
      ...defaultTypography,
      size: '1.5rem',
      margin: '0 0 16px 0',
      fontWeight: '500',
      lineHeight: '1',
    },
    h4: { ...defaultTypography, size: '1.124rem', margin: '0 0 5px 0', fontWeight: '400' },
    p: { ...defaultTypography, size: '1rem', margin: '0 0 10px 0', fontWeight: '400' },
    label: { ...defaultTypography, size: '1rem', fontWeight: '400' },
  },
  spacers: {
    xxxs: '0.125rem',
    xxs: '0.25rem',
    xs: '0.5rem',
    s: '0.75rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem',
  },
  margins: {
    right: '0.625rem',
    left: '0.625rem',
    top: '0.625rem',
    bottom: '0.625rem',
  },
  paddings: {
    xxxs: '0.2rem',
    xxs: '0.5rem',
    xs: '0.75rem',
    s: '1rem',
    m: '2rem',
    l: '2.5rem',
    xl: '3rem',
    xxl: '3.5rem',
  },
  breakpoints: {
    m: '1024px',
  },
  brandLogo: {
    icon: Logo,
    brandText: 'RK Chatbot',
  },
  brandLogoFull: {
    icon: Logo,
    brandText: 'RK Chatbot'
  },
  favicon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxMTM0LjY0IDEwMTMuMjMiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZmZmO30uY2xzLTJ7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudC0yKTt9LmNscy0yLC5jbHMtMywuY2xzLTR7bWl4LWJsZW5kLW1vZGU6bXVsdGlwbHk7fS5jbHMtM3tmaWxsOnVybCgjbGluZWFyLWdyYWRpZW50LTMpO30uY2xzLTR7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCk7fS5jbHMtNXtpc29sYXRpb246aXNvbGF0ZTt9PC9zdHlsZT48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudCIgeDE9IjMwLjI3IiB5MT0iNTQuMSIgeDI9IjM3My44NiIgeTI9Ijk3OC4zNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzFmYzFmMCIvPjxzdG9wIG9mZnNldD0iLjg5IiBzdG9wLWNvbG9yPSIjYTAzNGY5Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0yIiB4MT0iMjQ5LjEzIiB5MT0iOTEwLjY3IiB4Mj0iMTA1OS43MSIgeTI9IjYwNy4wNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjEiIHN0b3AtY29sb3I9IiMxZmMxZjAiLz48c3RvcCBvZmZzZXQ9Ii43NyIgc3RvcC1jb2xvcj0iI2EwMzRmOSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJsaW5lYXItZ3JhZGllbnQtMyIgeDE9Ijc2LjU4IiB5MT0iMTQ1Ljc1IiB4Mj0iMTA2MC40NyIgeTI9IjYwMC4xMSIgZ3JhZGllbnRUcmFuc2Zvcm09InRyYW5zbGF0ZSg2NjUuMDQgLTI5OS4xNykgcm90YXRlKDY1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iLjEyIiBzdG9wLWNvbG9yPSIjMWZjMWYwIi8+PHN0b3Agb2Zmc2V0PSIuODciIHN0b3AtY29sb3I9IiNhMDM0ZjkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBjbGFzcz0iY2xzLTUiPjxnIGlkPSJMYXllcl8xIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xMjguNSwwTDAsMjc1LjU3LDI2OC40OSwxMDEzLjIzbDczNy42Ni0yNjguNDksMTI4LjUtMjc1LjU3TDEyOC41LDBaTTM5Ni45OSw3MzcuNjZsLTEyMS40Mi0zMzMuNTksNDU1LjAxLDIxMi4xNy0zMzMuNTksMTIxLjQyWiIvPjxnPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIzOTYuOTkgNzM3LjY2IDI2OC40OSAxMDEzLjIzIDAgMjc1LjU3IDEyOC41IDAgMzk2Ljk5IDczNy42NiIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxMDA2LjE0IDc0NC43NCAyNjguNDkgMTAxMy4yMyAzOTYuOTkgNzM3LjY2IDExMzQuNjQgNDY5LjE3IDEwMDYuMTQgNzQ0Ljc0Ii8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI0MTUuMjkiIHk9Ii0xODIuNzEiIHdpZHRoPSIzMDQuMDYiIGhlaWdodD0iMTExMC4xNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkuOTIgNzI5LjE3KSByb3RhdGUoLTY1KSIvPjwvZz48L2c+PC9nPjwvc3ZnPg=='
};
