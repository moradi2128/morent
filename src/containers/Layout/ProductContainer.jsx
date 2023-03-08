import React from 'react'
import styled from 'styled-components'

const ProductContainer = (props) => {
    const { title, children, leftItem } = props
    return (
        <Wrapper>
            {/* === header === */}
            <Header>
                <Title>
                    {title}
                </Title>
                {leftItem && leftItem}
            </Header>
            {/* === Body === */}
                {children}
        </Wrapper>
    )
}

export default ProductContainer
const Wrapper = styled.section`
margin-bottom:42px;
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
color:${props => props.theme.text.secondary};
`
