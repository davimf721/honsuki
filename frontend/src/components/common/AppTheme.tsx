import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { ReactNode } from 'react';

// Personalize as cores e outros aspectos do tema conforme o design do seu projeto
const theme = createTheme({
  palette: {
    primary: {
      main: '#8c52ff', // Violeta - cor principal para seu app literário
      light: '#b07bff',
      dark: '#5d35b0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff7043', // Laranja para destaque
      light: '#ffa270',
      dark: '#c63f17',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f7',
      paper: '#ffffff',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: '"Merriweather", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    subtitle1: {
      fontFamily: '"Merriweather", serif',
    },
    subtitle2: {
      fontFamily: '"Merriweather", serif',
    },
    body1: {
      fontFamily: '"Merriweather", serif',
    },
    body2: {
      fontFamily: '"Merriweather", serif',
    },
    button: {
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '8px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          borderRadius: 16,
        },
      },
    },
  },
});

interface AppThemeProps {
  children: ReactNode;
}

export const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;