import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Avatar, Badge, Button, Divider, IconButton, InputAdornment, Menu, MenuItem, TextField, Tooltip } from '@mui/material'
import styled from 'styled-components'
import profile from "../../../assets/images/pic.png"
import {
    Cog6ToothIcon, BellIcon, HeartIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, UserCircleIcon, ArrowRightOnRectangleIcon, AdjustmentsVerticalIcon
} from '@heroicons/react/24/outline'
import IconUi from 'src/subComponents/IconUi'
const Header = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
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
                        <Tooltip title="جستجو">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
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
                </RightContainer>
                <FilterContainer>
                    <Input size="small" placeholder="جستجو" variant="outlined"
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
                <Logo href="/">morent</Logo>
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
    flex-flow: wrap-reverse;
    align-items: baseline;
}
`
const RightContainer = styled.div`
flex:5;
display:flex;
align-items:center;
gap:10px;
`
const Logo = styled(Link)`
flex:1;
text-decoration: none;
font-size: 30px;
font-weight: 700;
text-transform: uppercase;
color:${props => props.theme.primary};
@media (max-width:768px){
    margin-bottom:32px;
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
    order:-1;
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

