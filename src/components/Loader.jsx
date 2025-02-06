import React from 'react'
import styled from 'styled-components'

const LoaderContainer = styled.div`
  --d:22px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  color: #191919;
  box-shadow: 
    calc(1*var(--d))      calc(0*var(--d))     0 0,
    calc(0.707*var(--d))  calc(0.707*var(--d)) 0 1px,
    calc(0*var(--d))      calc(1*var(--d))     0 2px,
    calc(-0.707*var(--d)) calc(0.707*var(--d)) 0 3px,
    calc(-1*var(--d))     calc(0*var(--d))     0 4px,
    calc(-0.707*var(--d)) calc(-0.707*var(--d))0 5px,
    calc(0*var(--d))      calc(-1*var(--d))    0 6px;
  animation: l27 1s infinite steps(8);

` 


export const Loader = () => {
  return (
    <LoaderContainer className='loader'></LoaderContainer>
  )
}


