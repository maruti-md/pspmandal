// src/ThemeProviderWrapper.jsx
import React, { useMemo, useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

export default function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState('dark'); // default to dark

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

 const theme = useMemo(() =>
  createTheme({
    palette: {
      mode: mode, // still toggleable
      primary: {
        main: '#121C2D', // deep navy blue (official feel)
        contrastText: '#ffffff', // pure white for readability
      },
      background: {
        default: '#0D1117', // dark background
        paper: '#121212',    // surfaces like Drawer
      },
      text: {
        primary: '#ffffff',
        secondary: '#A0A0A0',
      },
    },
  }), [mode]
);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children(toggleColorMode)}
    </ThemeProvider>
  );
}
