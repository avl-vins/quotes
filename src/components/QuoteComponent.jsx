import React from 'react'
import styled from 'styled-components'

const QuoteContainer = styled.section`
width: 50%;
text-align: center;
display: flex;
flex-direction: column;
gap: 1rem;

.quote__text{
    
  font-family: "Roboto", serif;
  font-weight: 700;
  font-style: normal;
  font-size: 1.75rem;

}

.quote__author{
    
    text-align: center;
    font-weight: 500;
  
  }
    
`
export const QuoteComponent = ({ quote }) => {
    
  return (
    <QuoteContainer>
        <q className="quote__text">{quote.content}</q>
        <p className="quote__author">-{quote.author}-</p>
    </QuoteContainer>
  )
}

