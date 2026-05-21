'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    palette: {
        primary: {
            main: '#7AA28B',
            light: '#A5C4B1',
            dark: '#587F6A',
            contrastText: '#fff',
        },
        secondary: {
            main: '#B9CDB3',
            light: '#D9E6D5',
            dark: '#8FA689',
        },
        background: {
            default: '#F8F7F2',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#2D3436',
            secondary: '#636E72',
        },
    },
    typography: {
        fontFamily: [
            '"Noto Sans JP"',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
            lineHeight: 1.2,
        },
        h2: {
            fontWeight: 700,
            lineHeight: 1.3,
        },
        h3: {
            fontWeight: 700,
            lineHeight: 1.4,
        },
        h4: {
            fontWeight: 700,
            lineHeight: 1.4,
        },
        h5: {
            fontWeight: 700,
        },
        h6: {
            fontWeight: 700,
        },
        body1: {
            lineHeight: 1.8,
            fontSize: '1rem',
        },
        body2: {
            lineHeight: 1.7,
            fontSize: '0.9rem',
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 30,
                    textTransform: 'none',
                    fontWeight: 700,
                    padding: '10px 24px',
                },
                contained: {
                    '&.MuiButton-containedPrimary': {
                        boxShadow: '0 4px 14px 0 rgba(122, 162, 139, 0.39)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: '0 8px 32px rgba(0,0,0,0.04)',
                    border: '1px solid rgba(0,0,0,0.02)',
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
