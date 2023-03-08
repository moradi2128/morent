import React from 'react'
import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'

const Layout = ({ children, footer = true }) => {
    return (
        <Wrapper>
            <Header />
            {children}
            {footer && <Footer />}
        </Wrapper>
    )
}

export default Layout
const Wrapper = styled.div`
/* background-color:${props => props.theme.light}; */
background-color:#F6F7F9;
`