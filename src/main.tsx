import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './fonts/fonts.css'
import './index.css'
import {createTheme, ThemeProvider} from "@mui/material";


const theme = createTheme({
    typography: {
        fontFamily: [
            'Lexend',
            'sans-serif'
        ].join(','),
    }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
