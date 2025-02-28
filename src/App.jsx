import React, { useState } from 'react'
import { Quotes } from './Quotes'
import { ThemeProvider } from 'styled-components'
import { dark, light } from './theme/theme'


export const App = () => {

    const [theme, setTheme] = useState(light)

    const onLine = navigator.onLine

    const handleTheme = ( res )=>{

        if(res){
            setTheme(light)
        }else{
            setTheme(dark)
        }


    }
  
  return (
    <ThemeProvider theme={theme} >
        
        {

            onLine?<Quotes onTheme={ handleTheme } />:<h2>Offline, check your internet connection</h2>
       
        }
        
    </ThemeProvider>
  )
}
