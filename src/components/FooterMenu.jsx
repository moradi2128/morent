
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
const FooterMenu = (props) => {
  const { title, children } = props.item
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
    const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <Wrapper >
      <Title>
        {title}
      </Title>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible">
        {
          children.map((child, index) => {
            return <MenuItem item={child} key={index} />
          })
        }
      </motion.ul>
    </Wrapper>
  )
}

export default FooterMenu
const MenuItem = (props) => {
  const { title, href } = props.item
return (
  <MenuItemLi >
    <Link href={`${href}`} >
      {title}
    </Link>
  </MenuItemLi>
)
}
const Wrapper = styled.div`
margin-bottom:48px;
`
const Title = styled.h4`
font-size:18px;
font-weight:600;
margin-bottom:16px;
color:${props => props.theme.text.primary};
`
const MenuItemLi = styled.li`
overflow: hidden;
display: flex;
flex-direction: row;
align-items: center;
gap: 5px;
margin:5px 0;
padding:5px 0;
transition: all .3s ease-in-out;
& a{
  padding:5px 0;
  transition: all .3s ease-in-out;
}
&:hover a{
  transform: translateX(-4px);
  
}
&:hover:before{
  width: 10px;
}
:before{
  content: "";
  transition: all .3s ease-in-out;
    width: 0;
    height: 3px;
    background: ${props => props.theme.primary};
    display: block;
    border-radius: 10px;
}
`
