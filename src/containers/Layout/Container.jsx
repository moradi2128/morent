import React from 'react'
import styled from 'styled-components'
import Container from '@mui/material/Container';
const ContainerBody = ({ children, style }) => {
    return <Wrapper maxWidth="xl" style={style}>
        {children}
    </Wrapper >
}
export default ContainerBody

const Wrapper = styled(Container)`

`

