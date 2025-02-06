import styled from "styled-components"
import { QuoteComponent } from "./components/QuoteComponent"
import { getQuotes } from "./helpers/getQuotes"
import { useEffect, useState } from "react"
import { Loader } from "./components/Loader"

const Container = styled.section`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    text-align: justify;

    .quote__header{
        height: 40%;
        width: 60%;
        padding: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        line-height: 1.5;
        font-family: "Roboto", serif;
    }
    .quotes__title{
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
    }
`


export const Quotes = () => {
    
    const [ quote, setQuote ] = useState('')
    
    
    const title = "Inspiring Thoughts"
    
    const getData = async ()=>{

        const data = await getQuotes()

        setQuote(data)
       
    } 
    
   
   
   

    useEffect(() => {
        getData()
          

    }, [])

    
    
    

    return (
    <Container>
        <header className="quote__header">
           <h1 className="quotes__title"> {title.toUpperCase()} </h1> 
           <p className="quotes__description">Inspiring Thoughts is a  simple website  that displays random quotes and thoughts. The quotes are sourced from renowned authors across different eras, covering topics such as life, motivation, creativity, and personal growth.

The goal is to provide users with a daily dose of inspiration and reflection, whether as a motivational tool or as a way to explore famous sayings and ideas.</p> 
        </header>
        {
            quote?<QuoteComponent quote={quote} />:<Loader/>
        }
        
    </Container>

  )
}
