import React from 'react'
import Image from 'next/image'
import { Avatar, Badge, Divider, IconButton, InputAdornment, Menu, MenuItem, TextField, Tooltip } from '@mui/material'
import styled from 'styled-components'
import profile from "../../assets/images/pic.png"
import {
    Cog6ToothIcon, BellIcon, HeartIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, UserCircleIcon, ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
const MenuBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return <Wrapper>
        <RightContainer>
            <div>
                <Tooltip title="منوی کاربری">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Image src={profile} style={{ width: 35, height: 35, borderRadius: "50%" }} alt="profile" />
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
                        <UserCircleIcon style={{ width: "20px", height: "20px", marginLeft: "5px" }} /> {t('app.menu.profile')}
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ArrowRightOnRectangleIcon style={{ width: "20px", height: "20px", marginLeft: "5px" }} /> {t('app.menu.logout')}
                    </MenuItem>
                </Menu>
            </div>
            <IconButton
                // onClick={handleClick}
                size="small"
                sx={{ ml: 1 }}
            >
                <Cog6ToothIcon style={{ width: "20px", height: "20px" }} />
            </IconButton>
            <IconButton
                // onClick={handleClick}
                size="small"
                sx={{ ml: 1 }}
            >
                <Badge color="error" variant="dot">
                    <BellIcon style={{ width: "20px", height: "20px" }} />
                </Badge>
            </IconButton>
            <IconButton
                // onClick={handleClick}
                size="small"
                sx={{ ml: 1 }}
            >
                <HeartIcon style={{ width: "20px", height: "20px" }} />
            </IconButton>
        </RightContainer >
    <LeftContainer>
        <Input sx={{ borderRadius: 10, marginRight: 8 }} size="small" label={t('app.search')} variant="outlined"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <MagnifyingGlassIcon style={{ width: "18px", height: "18px" }} />
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment position="end">
                        <AdjustmentsHorizontalIcon style={{ width: "18px", height: "18px" }} />
                    </InputAdornment>
                )

            }}
        />
        <Logo>morent</Logo>
    </LeftContainer>
    </Wrapper >
}
export default MenuBar

const Wrapper = styled.header`
display:flex;
justify-content:space-between;
align-items:center;
padding:15px 10px;
position: absolute;
height: 80px;
left: 0px;
width:100%;
top: 0px;
background: ${props => props.theme.bgWhite};
border: 1px solid;
border-color: ${props => props.theme.borderColor};
`
const RightContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const LeftContainer = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const Logo = styled.h2`
font-size: 30px;
text-transform: uppercase;
color:${props => props.theme.primary}
`
const Input = styled(TextField)`
& .MuiInputBase-root{
border-radius:20px;
height: 44px;
}
`

