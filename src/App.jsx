import React, { useState } from 'react'
import { Quotes } from './Quotes'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme/theme'


export const App = () => {

    const [theme, setTheme] = useState(light)

    const handleTheme = ( res )=>{

        if(res){
            setTheme(light)
        }else{
            setTheme(dark)
        }


    }
  
  return (
    <ThemeProvider theme={theme} >
        <Quotes onTheme={ handleTheme } />
    </ThemeProvider>
  )
}
