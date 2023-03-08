import { menuDrawerData } from 'dummy'
import Link from 'next/link'
import React from 'react'
import IconUi from 'src/subComponents/IconUi'
import styled from 'styled-components'
import { useRouter } from 'next/router';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'


const MenuDrawer = () => {
    const localtion = useRouter()
    const RenderMenuItem = (props) => {
        const { href, icon, name } = props.context
        return <MenuItem href={`${href}`} isActive={localtion.pathname == href} {...props}>
            <IconUi>
                {icon}
            </IconUi>
            <h4>
                {name}
            </h4>
        </MenuItem>
    }
    return (
        <Wrapeer>
            {
                menuDrawerData.map((menuItem) => {
                    return <div key={menuItem.id}>
                        <Title>
                            {menuItem.title}
                        </Title>
                        {
                            menuItem?.children.map((child) => {
                                return <RenderMenuItem context={child} key={child.id} />
                            })
                        }
                    </div>
                })
            }
            <RenderMenuItem as="button" context={{ icon: <ArrowRightOnRectangleIcon />, name: "خروج" }} />
        </Wrapeer >
    )
}
export default MenuDrawer;
const Wrapeer = styled.div`
max-width:286px ;
background-color: ${props => props.theme.bgWhite};
/* height: 100vh; */
width: 100%;
padding: 16px;
@media (max-width:768px) {
    display: none;
}
`
const MenuItem = styled(Link)`
cursor: pointer;
width:100%;
outline: unset;
border: unset;
padding:16px;
margin-bottom: 5px;
display: flex;
align-items: center;
gap:5px;
background-color: ${props => props.isActive ? props.theme.primary : "transparent"};
border-radius: 10px;
color:${props => props.isActive ? props.theme.text.white : props.theme.text.secondary};
box-shadow:${props => props.isActive ? "#3563e97a 0px 4px 10px 0px; " : "unset"};
transition: all .3s ease;
&:hover{
    background-color:${props => !props.isActive && "#f0f8ffeb"};
}
& h4{
font-weight: 500;
font-size: 12px;
line-height: 150%;
margin: 0 5px;
}
`
const Title = styled.h4`
color:${props => props.theme.text.secondary};
margin: 28px 0;
font-weight: 500;
font-size: 14px;
line-height: 15px;
`
