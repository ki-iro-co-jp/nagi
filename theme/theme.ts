'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#7AA28B',
        },
        secondary: {
            main: '#B9CDB3',
        },
        background: {
            default: '#F8F7F2',
        },
    },
    typography: {
        fontFamily: [
            '"Noto Sans JP"',
            'sans-serif',
        ].join(','),
        h1: {
            fontWeight: 700,
        },
        h2: {
            fontWeight: 700,
        },
        body1: {
            lineHeight: 1.9,
        },
    },
    shape: {
        borderRadius: 18,
    },
});

export default theme;
