import { ChevronDownIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import styled from 'styled-components'
import InputUi from './InputUi'

const SelectCustom = (props) => {
    const { label, placeholder, onChange, value, error = false, errorMessage, data, datePicker = false } = props
    const [showDropdown, setShowDropdown] = useState(false)
    const [valueDropDowm, setValueDropDowm] = useState("");
    const RenderDropdownItem = (props) => {
        const { label, value } = props.content
        return <DropdownItem onClick={props.onClick}>{label}</DropdownItem>
    }

    return (
        <>
            <FormContainer >
                <InputUi label={label} icon errorMessage={errorMessage} name={label} id={label} placeholder={placeholder} onClick={() => setShowDropdown(!showDropdown)} value={valueDropDowm} error={error} readOnly={datePicker} />
                <DropdownContainer showDropdown={showDropdown}>
                    {data?.map((item, index) => {
                        return <RenderDropdownItem content={item} onClick={() => { setValueDropDowm(item.label); setShowDropdown(false) }} key={index} />
                    })}
                </DropdownContainer>
            </FormContainer >
            {showDropdown && < BackDrop onClick={() => setShowDropdown(false)} />}
        </>
    )
}

export default SelectCustom




const FormContainer = styled.div`
    position: relative;
`
const DropdownContainer = styled.div`
overflow: hidden;
position: absolute;
border-radius: 10px;
max-height: 150px;
overflow: auto;
top: 80px;
left: 0;
right: 0;
z-index: 9999;
background-color: #e5e5e5;
height: ${props => props.showDropdown ? "200px" : 0};
transition: all 0.3s ease;
`
const DropdownItem = styled.div`
cursor: pointer;
    padding: 14px 10px;
    border-bottom: 1px solid #fff;
    border-radius: 5px;
    background-color: #e7e4e4;
    transition: all 0.3s ease;
    &:hover{
        background-color:${props => props.theme.primary};
    }
`
const BackDrop = styled.div`
position: fixed;
inset: 0;
width: 100%;
height: 100%;
z-index: 999;
`