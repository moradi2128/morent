import React from 'react'
import Link from 'next/link'
import { Link as MUILink } from '@mui/material'
import styled from 'styled-components'

const LinkUi = (props) => {
    const { btnStyle, href, passHref = true, children, color, legacyBehavior = true } = props
    return (
        <Link href={`${href}`} passHref={passHref} legacyBehavior={legacyBehavior}>
            <LinkNext variant="contained" size="medium" style={btnStyle} underline="none" color={color}>{children}</LinkNext>
        </Link>
    )
}

export default LinkUi
const LinkNext = styled(MUILink)`
background-color:${props => props.color == "primary" ? props.theme.primary : props.theme.secondary};
padding: 10px 20px;
border-radius: 4px;
color:#fff !important;
font-weight: 500;
font-size: 16px;
line-height: 150%;
`