import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
const CheckboxUi = (props) => {
    const { value, size, onChange, label, checked = false } = props

    // const [checked, setChecked] = React.useState(value || false);
    const handleChange = (event) => {
        setChecked(event.target.checked);
        onChange(event)
    };
    return (
        <FormControlLabel
            sx={{ display: "flex", alignItems: "center" }}
            control={
                <Checkbox
                    value={value}
                    // === size => default = med - small - large
                    size={size}
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                    {...props}
                />
            }
            label={label}
        />
    )
}

export default CheckboxUi
