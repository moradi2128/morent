import React from 'react'
import Slider, { SliderThumb } from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
const SliderUi = (props) => {
    const { valueProps = 0 } = props
    const [value, setValue] = React.useState(valueProps);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <SliderCustom
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={value}
            onChange={handleChange}
            {...props}
        />
    )
}

export default SliderUi

const SliderCustom = styled(Slider)(({ theme }) =>
({
    color: theme.palette.primary.main,
    height: 12,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 20,
        width: 20,
        backgroundColor: theme.palette.primary.main,
        border: '4px solid #fff',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 40,
        height: 40,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: theme.palette.primary.main,
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(0deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(-45deg)',
        },
    },
}))
