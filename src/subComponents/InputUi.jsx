import { ChevronDownIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const InputUi = (props) => {
    const { name, id, label, placeholder, onChange, value, error = false, errorMessage, onClick, type = "text", icon = false, readOnly = false, styleContainer } = props
    const [rotateIcon, setRotateIcon] = useState(false)
    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)
    return (
        <FormContainer>
            <Label htmlFor={label}>
                {label}
            </Label>
            <InputContainer
                error={error}

                onClick={onClick ? onClick : null}
                style={styleContainer}
                focused={focused} >
                <Input
                    onFocus={onFocus}
                    onBlur={onBlur}
                    readOnly={readOnly}
                    name={name} id={id} type={type} error={error} placeholder={placeholder}
                    onChange={onChange} value={value} />
                {icon && <ChevronDownIcon style={{ width: "15px", height: "15px", transition: "all 0.3s ease", transform: rotateIcon ? "rotate(180deg)" : "rotate(0deg)" }} />}
            </InputContainer>
            <ErrorMessage>
                {errorMessage !== "" && error && (
                    <>
                        < InformationCircleIcon style={{ width: "18px", height: "18px" }} />
                        <span>{errorMessage}</span>
                    </>
                )}
            </ErrorMessage>
        </FormContainer>
    )
}

export default InputUi

const FormContainer = styled.div`
    position: relative;
`
const Label = styled.label`
display: block;
font-weight: 600;
margin-bottom: 12px;
font-size:14px;
@media (min-width:768px) {
    font-size:16px;
}
`
const InputContainer = styled.div`
cursor: pointer;
position: relative;
height: 56px;
width: 100%;
padding:0 0 0 25px;
display: flex;
align-items: center;
justify-content: space-between;
background:${props => props.error ? "#fdf5f5 " : "#F6F7F9"} ;
color:${props => props.theme.text.secondary} ;
border-radius: 10px;
border: ${props => props.error ? "1px" : 0} solid #eb8d8d;
transition:  all 0.3s ease;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
outline: ${props => props.focused ? `1px solid  ${props.theme.primary}` : "unset"};
/* &:focus-visible{
    outline: 1px solid ${props => props.theme.primary};
    outline: ${props => props.checked ? `1px solid  ${props.theme.primary}` : "unset"};
} */
&:hover{
    background:#f3f3f3 ;
}
`
const Input = styled.input`
position: relative;
height: 100%;
width: 100%;
font-size: 14px;
padding:0 32px;
font-family: inherit;
background:inherit;
border-radius: 10px;
border: unset;
transition:  all 0.3s ease;
outline:unset;
&:focus-visible{
    outline: unset;
}
`
const ErrorMessage = styled.span`
display: flex;
align-items: center;
gap:4px;
/* display: block; */
font-size: 11px;
margin: 10px;
color:#e15353 ;
`