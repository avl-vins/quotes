import styled from "styled-components"
import { QuoteComponent } from "./components/QuoteComponent"
import { getQuotes } from "./helpers/getQuotes"
import { useEffect, useState } from "react"
import { Loader } from "./components/Loader"
import { MdNightlight } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";

const Container = styled.section`
    display: flex;
    height: 100vh;
    align-items: center;
    flex-direction: column;
    padding: 4rem;
    text-align: justify;
    background-color: ${props => props.theme.main};
    color: ${props => props.theme.text};
    gap: 4rem;
    
    .quote__icons{
        /* background-color: rebeccapurple; */
    width: 100%;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    font-size: 1.5rem;
    }

    .icon{

        cursor: pointer;
        &:hover{
            scale:.9 ;
        }
        &:active{
            scale:1 ;
        }

    }
    
    .quote__header{
        height: 40%;
        width: 60%;
        padding: 2rem;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2rem;
        line-height: 1.5;
        font-size: 1.2rem;
    }
    .quotes__title{
        font-size: 3rem;
        font-weight: 700;
        text-align: center;
    }
`


export const Quotes = ({ onTheme }) => {

    const [quote, setQuote] = useState('')


    const title = "Inspiring Thoughts"

    const description = "Inspiring Thoughts is a  simple website  that displays random quotes and thoughts. The quotes are sourced from renowned authors across different eras, covering topics such as life, motivation, creativity, and personal growth.The goal is to provide users with a daily dose of inspiration and reflection, whether as a motivational tool or as a way to explore famous sayings and ideas."

    const getData = async () => {

        const data = await getQuotes()

        setQuote(data)

    }





    useEffect(() => {
        getData()


    }, [])





    return (
        <Container>
            <header className="quote__header">

                <div className="quote__icons">
                    <WiDaySunny className="icon" onClick={()=>onTheme(true)}  /> 
                    <MdNightlight className="icon" onClick={()=>onTheme(false)}     /> 
                </div>

                <h1 className="quotes__title"> {title.toUpperCase()} </h1>

                <p className="quotes__description">{description}</p>

            </header>
            
            {
               quote?<QuoteComponent quote={quote} />:<Loader/>
            }

        </Container>

    )
}
