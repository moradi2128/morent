import { Button } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components';

const ButtonUi = (props) => {
  const { children, href, size = "small", type = "primary", loading } = props;

  return <ButtonCustom
    variant={type == "primary" ? "contained" : type == "callToAction" ? "outlined" : type == "secondary" ? "contained" : ""}
    size={size}
    href={href}
    type={type}
    style={{ padding: "10px 20px", fontSize: "12px", fontWeight: "500" }}
    LinkComponent={href ? Link : null}
    underline="none"
    {...props}
  // === Icon props => startIcon={<DeleteIcon />} / loadingIndicator="Loading…" /  loadingPosition="start" ,startIcon={<SaveIcon />}
  // === Loading props =>  loading
  >
    {loading ? <CircularProgress color="inherit" /> : children}
  </ButtonCustom>

}

export default ButtonUi

const ButtonCustom = styled(Button)`
position: relative;
   transition: all .3s;
   animation: moveInBottom 5s ease-out;
    animation-fill-mode: backwards;
&:hover{
  transform: ${props => props.type !== "outlined" ? "translateY(-3px)" : "unset"} ;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  box-shadow: ${props => props.type !== "outlined" ? "0 10px 20px rgba(0, 0, 0, 0.2)" : "unset"};
}
&:hover::after {
    transform: scaleX(1.4) scaleY(1.6);
    opacity: 0;
}
&::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    opacity: .5;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all .4s;
    background-color: ${props => props.theme.primary};
}
@keyframes moveInBottom {
    0% {
        opacity: 0;
        transform: translateY(30px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
`