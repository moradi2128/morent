import { Grid } from '@mui/material'
import React, { Children } from 'react'
import styled from 'styled-components'

const ProductLayout = ({ children }) => {
    const arrayChildren = Children.toArray(children);
    return (
        <Wrapper >
            {arrayChildren}
        </Wrapper>
    )
}

export default ProductLayout
const Wrapper = styled.div`
width:100%;
display: grid;
/* grid-template-columns: repeat(${props => props.columns}, 1fr); */
grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
grid-template-rows: 1fr;
grid-column-gap: 15px;
grid-row-gap: 15px;
@media (max-width:768px){
    grid-template-columns:1fr;
}
`