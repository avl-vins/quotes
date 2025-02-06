import React from 'react'
import styled from 'styled-components'

const QuoteContainer = styled.section`
width: 50%;
text-align: center;
display: flex;
flex-direction: column;
gap: 1rem;

.quote__text{
    
  font-family: "Concert One", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.75rem;

}

.quote__author{
    
    text-align: center;
  
  }
    
`
export const QuoteComponent = ({ quote }) => {
    
  return (
    <QuoteContainer>
        <q className="quote__text">{quote.content}</q>
        <h4 className="quote__author"> - {quote.author} - </h4>
    </QuoteContainer>
  )
}

