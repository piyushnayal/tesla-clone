import React from 'react'
import styled from 'styled-components'

function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model 3</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>
        
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-3.jpg');
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: centre;
`