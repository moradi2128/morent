import React from 'react'
import styled from 'styled-components'

const CardWrapper = (props) => {
    const { title, leftItem,  children } = props
    return <Wppaer>
        <Header>
            <Title>
                {title}
            </Title>
            {leftItem && leftItem}
        </Header>
        {children}
    </Wppaer>
}

export default CardWrapper

const Wppaer = styled.div`
padding:24px;
background-color: ${props => props.theme.bgWhite};
border-radius:10px;
`
const Header = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    margin-bottom:30px;
`
const Title = styled.h5`
font-weight: 600;
font-size: 16px;
line-height: 20px;
color:${props => props.theme.text.primary};
`