import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Avatar, Badge, Button, Divider, IconButton, InputAdornment, Menu, MenuItem, TextField, Tooltip, Typography } from '@mui/material'
import styled from 'styled-components'
import profile from "../../../assets/images/pic.png"
import {
    Cog6ToothIcon, BellIcon, HeartIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, UserCircleIcon, ArrowRightOnRectangleIcon, AdjustmentsVerticalIcon, Bars4Icon, XMarkIcon
} from '@heroicons/react/24/outline'
import IconUi from 'src/subComponents/IconUi'
const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuState, setMenuState] = useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Container >
            <Wrapper>
                <RightContainer>
                    {/* === Avatar === */}
                    <div>
                        <Tooltip title="پروفایل">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 1 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <div>
                                    <Avatar src={profile.src} sx={{ width: 35, height: 35 }} alt="profile" />
                                </div>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        left: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <Link href={"/dashboard"} style={{ color: "#000" }}>
                                    <IconUi >
                                        <UserCircleIcon /> پروفایل
                                    </IconUi>
                                </Link>
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <IconUi >
                                    <ArrowRightOnRectangleIcon /> خروج
                                </IconUi>
                            </MenuItem>
                        </Menu>
                    </div>
                    {/* === Menu in defalut mode === */}
                    <MenuDefalut>
                        {/* === setting === */}
                        <Tooltip title="تنظیمات">
                            <IconButton
                                // onClick={handleClick}
                                size="large"
                                sx={{ ml: 1 }}
                            >
                                <IconUi>
                                    <Cog6ToothIcon />
                                </IconUi>
                            </IconButton>
                        </Tooltip>
                        {/* === notiction === */}
                        <Tooltip title="پیغام ها">
                            <IconButton
                                // onClick={handleClick}
                                size="large"
                                sx={{ ml: 1 }}
                            >
                                <Badge color="error" variant="dot">
                                    <IconUi>
                                        <BellIcon />
                                    </IconUi>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        {/* === licked === */}
                        <Tooltip title="پسندیده ها">
                            <IconButton
                                // onClick={handleClick}
                                size="large"
                                sx={{ ml: 1 }}
                            >
                                <IconUi>
                                    <HeartIcon />
                                </IconUi>
                            </IconButton>
                        </Tooltip>
                    </MenuDefalut>
                    {/* === Menu iocn in mobile mode === */}
                    <MenuWrapper>
                        <MenuWrapperItemAnimation isOpen={menuState} >
                            <MenuWrapperItem>
                                {/* === setting === */}
                                <Tooltip title="تنظیمات">
                                    <IconButton
                                        // onClick={handleClick}
                                        size="large"
                                        sx={{ ml: 1 }}
                                    >
                                        <IconUi>
                                            <Cog6ToothIcon />
                                        </IconUi>
                                    </IconButton>
                                </Tooltip>
                                {/* === notiction === */}
                                <Tooltip title="پیغام ها">
                                    <IconButton
                                        // onClick={handleClick}
                                        size="large"
                                        sx={{ ml: 1 }}
                                    >
                                        <Badge color="error" variant="dot">
                                            <IconUi>
                                                <BellIcon />
                                            </IconUi>
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                {/* === licked === */}
                                <Tooltip title="پسندیده ها">
                                    <IconButton
                                        // onClick={handleClick}
                                        size="large"
                                        sx={{ ml: 1 }}
                                    >
                                        <IconUi>
                                            <HeartIcon />
                                        </IconUi>
                                    </IconButton>
                                </Tooltip>
                            </MenuWrapperItem>
                        </MenuWrapperItemAnimation>
                        <IconButton
                            onClick={() => setMenuState(!menuState)}
                            size="large"
                            sx={{ ml: 1 }}
                        >
                            <IconUi>
                                {menuState ? <XMarkIcon /> : <Bars4Icon />}
                            </IconUi>
                        </IconButton>
                    </MenuWrapper>
                </RightContainer>
                <FilterContainer>
                    <Input size="small" placeholder="جستجو ..." variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <IconUi>
                                        <MagnifyingGlassIcon />
                                    </IconUi>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <AdjustmentsHorizontalIconContainer>
                                        <IconUi>
                                            <AdjustmentsHorizontalIcon />
                                        </IconUi>
                                    </AdjustmentsHorizontalIconContainer>
                                </InputAdornment>
                            )

                        }}
                    />
                    <FilterIconContainer>
                        <IconUi><AdjustmentsVerticalIcon /></IconUi>
                    </FilterIconContainer>
                </FilterContainer>
                <Logo href="/">
                    <Typography variant="h4">morent</Typography>
                </Logo>
            </Wrapper >
        </Container >
    )
}
export default Header

const Container = styled.header`
position: relative;
    @media (max-width:768px){
        :before{
             content: "";
            position: absolute;
            top:0;
            background: ${props => props.theme.bgWhite};
            min-height: 280px;
            width: 100%;
            z-index: -1;
        }
}
`
const Wrapper = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 10px;
min-height: 80px;
width:100%;
border-bottom: 1px solid;
background: ${props => props.theme.bgWhite};
border-color: ${props => props.theme.borderColor};
@media (max-width:768px){
    border: unset;
    flex-flow: column-reverse;
    align-items: inherit;
}
`
const RightContainer = styled.div`
flex:5;
display:flex;
align-items:center;
gap:10px;
@media (max-width:768px) {
    justify-content: space-between;    
    order: 3;
}
`
const Logo = styled(Link)`
flex:1;
text-decoration: none;
font-size: 30px;
text-transform: uppercase;
h4{
    font-weight: 700;
}
color:${props => props.theme.primary};
@media (max-width:768px){
    margin:15px 0;
    display: flex;
    order:2
}
`
const Input = styled(TextField)`
flex:1;
input{
    font-size: 12px;
    font-family: inherit;
}
.MuiInputBase-root{
border-radius:20px;
height: 44px;
margin-left:32px;
padding: 12px 22px;
}
.MuiOutlinedInput-notchedOutline{
    border-color:#c3d4e977;
}
.muirtl-ft68za-MuiInputBase-root-MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: #c3d4e9af;
}
@media (max-width:768px){
    & .MuiInputBase-root{
        border-radius:10px;
        height: 48px;
        margin-left:0;
}
}
`
const FilterContainer = styled.div`
display:flex;
align-items:center;
gap:1.5rem;
flex:3;
@media (max-width:768px){
    order:2;
    flex:1 0 100%; 

}

`
const FilterIconContainer = styled(Button)`
border: 1px solid rgba(195, 212, 233, 0.4);
border-radius: 10px;
height: 48px;
width: 48px;
display:flex;
justify-content:center;
align-items:center;
& svg{
    color: #596780;
}
@media (min-width:768px){
display:none !important;
}
`
const AdjustmentsHorizontalIconContainer = styled.div`
@media (max-width:768px){
display:none
}
`
// === Menu ===
const MenuDefalut = styled.div`
display: none;
@media (min-width:768px){
display:flex;
flex-direction: row;
align-items: center;
}
`
const MenuWrapper = styled.div`
display:flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
@media (min-width:768px){
display:none
}
`
const MenuWrapperItem = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`
const MenuWrapperItemAnimation = styled.div`
overflow: hidden;
transition: all .3s ease;
width:${props => props.isOpen ? "100%" : "0"};
@media (min-width:768px){
display:none
}
`

