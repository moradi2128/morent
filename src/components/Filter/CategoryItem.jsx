import React from 'react'
import styled from 'styled-components'

const CategoryItem = (props) => {
    const { title,children } = props
    return (
        <Wrapper>
            <Title>{title}</Title>
            {
                children
            }
        </Wrapper >
    )
}

export default CategoryItem
const Wrapper = styled.div`
margin-bottom:30px;
`
const Title = styled.h4`
font-weight: 500;
font-size: 12px;
line-height: 15px;
color:${props => props.theme.text.secondary};
margin-bottom:10px;
`