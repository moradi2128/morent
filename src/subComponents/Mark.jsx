import React from 'react'
import styled from 'styled-components'


const Mark = ({ title, color = "primary" }) => {
    return <TitleContainer>
        <IconContainer>
            <IconOut color={color} />
            <IconIn color={color} />
        </IconContainer>
        <Title>{title}</Title>
    </TitleContainer>
}


export default Mark

const TitleContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap:1rem;
margin-bottom: 24px;
`
const IconContainer = styled.div`
position: relative;
`
const IconIn = styled.div`
width: 8px;
height: 8px;
background-color: ${props => props.color == "primary" ? props.theme.primary : props.theme.secondary};
border-radius: 50%;
position: absolute;
    top: 4px;
    right: 4px;
`
const IconOut = styled.div`
width: 16px;
height: 16px;
background-color: ${props => props.color == "primary" ? "rgba(53, 99, 233, 0.3) " : "rgba(92, 175, 252, 0.3)"};
border-radius: 50%;

`
const Title = styled.div`
font-size:16px;
font-weight: 600;
@media (min-width:768px) {
    font-size:18px;
}
`