import React from 'react'
import styled from 'styled-components'

const IconUi = ({ children,style }) => {
    return (
        <Wrapper style={style}>{children}</Wrapper>
    )
}

export default IconUi
const Wrapper = styled.div`
display:flex;
align-items:center;
gap:1rem;
& svg{
    width: 20px;
    height: 20px;
}
`