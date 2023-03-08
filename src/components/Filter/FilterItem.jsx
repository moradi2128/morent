import React, { useState } from 'react'
import CheckboxUi from 'src/subComponents/CheckboxUi'
import styled from 'styled-components'

const FilterItem = ({ content, onChange }) => {
    const { label, isChecked, length } = content
    const [checkValue, setCheckVlaue] = useState(isChecked);
    const onChangeHandler = (event) => {
        const {
            target: { value, checked }
        } = event;
        setCheckVlaue(checked)
        typeof onChange == "function" && onChange(event)
    }
    return (
        <WrapperMain>
            <CheckboxUi checked={checkValue} value={label} defa onChange={(e) => onChangeHandler(e)} >
            <Wrapper>
                <Name>{label}</Name>
                <Length>{"(" + length + ")"}</Length>
            </Wrapper>
        </CheckboxUi>
        </WrapperMain >

    )
}

export default FilterItem
const WrapperMain = styled.div`
margin-bottom:5px;
`
const Wrapper = styled.div`
display:flex;
align-items:center;
gap:5px;
`
const Name = styled.h5`
font-weight: 500;
font-size: 12px;
/* color:${props => props.theme.text.secondary}; */
color:#596780;
`
const Length = styled.span`
font-weight: 500;
font-size: 12px;
color:${props => props.theme.text.secondary};

`