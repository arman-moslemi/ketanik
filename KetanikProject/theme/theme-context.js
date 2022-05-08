import React, { createContext, useState } from 'react';
const themes = {
    dark: {
        backgroundColor:"#000",

        appColor: "#16B1F4",
    appColorDarker: "#0385BC",
    text: "#311944",
    darkGreen: "#32655c",
    borderColor:"#cacaca",
    lightGreen:'#f1f5ec',
    gray:'#E8EAE6',
    white:'#fff'
    },
    light: {
        backgroundColor:"#f4f4f4",
        appColor: "#16B1F4",
        appColorDarker: "#0385BC",
        text: "#311944",
        darkGreen: "#32655c",
        borderColor:"#cacaca",
        lightGreen:'#f1f5ec',
        gray:'#E8EAE6',
        white:'#fff'
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
}
const ThemeContext = createContext(initialState);

function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false) // Default theme is light

    // To toggle between dark and light modes
    const toggle = () => {
        setDark(!dark)
        console.log('toggled');
    }

    // Filter the styles based on the theme selected
    const theme = dark ? themes.dark : themes.light

    return (
        <ThemeContext.Provider value={{ dark, theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext }