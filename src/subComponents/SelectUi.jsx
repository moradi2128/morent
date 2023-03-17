import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { maxWidth } from '@mui/system';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



function getStyles(data, value, theme) {
    return {
        fontWeight:
            value?.indexOf(data) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function SelectUi({ data, placeholder, label, onSelect, styleContainer, value: valueDate, disabled = false,
    // === Calender prerequisite ===
    openCalendar,
    handleValueChange }) {
    const theme = useTheme();
    const [value, setPersonData] = React.useState(valueDate);

    const handleChange = (event) => {
        // === Calender Handler ===X
        typeof handleValueChange == "function" && handleValueChange()
        const {
            target: { value },
        } = event;
        setPersonData(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        typeof onSelect == "function" && onSelect(value)
    };

    return (
        <div>
            <FormControl sx={{ width: "100%", minWidth: 75, maxWidth: 250, flex: 1, ...styleContainer }} variant="standard">
                <Label>{label}</Label>
                <SelectCustom
                    disabled={disabled}
                    displayEmpty
                    value={valueDate}
                    onClick={openCalendar}
                    onChange={handleChange}
                    renderValue={(selected) => {
                        if (selected?.length === 0) {
                            return <Placeholder>{placeholder}</Placeholder>;
                        }
                        return selected;
                    }}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <Placeholder >{placeholder}</Placeholder>
                    </MenuItem>
                    {data?.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                            style={getStyles(item, value, theme)}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </SelectCustom>
            </FormControl>
        </div>
    );
}
const Label = styled.span`
font-weight: 700;
font-size: 14px;
margin-bottom: 5px;
line-height: 150%;
color:${props => props.theme.text.primary};
@media (max-width:748px){
    font-size: 11px;
}
`
const SelectCustom = styled(Select)`
&.Mui-disabled{
color:inherit;
font-family: inherit !important;
cursor:pointer;
}
	&.Mui-disabled:before {
        border-bottom-style: solid;
    }
`
const Placeholder = styled.p`
font-size: 12px;
 font-family: inherit;
 color:${props => props.theme.text.secondary};
 @media (max-width:768px){
    font-size: 9px;
 }
`