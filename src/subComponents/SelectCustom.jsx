import { ChevronDownIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { TextField } from '@mui/material'
import { useState } from 'react'
import styled from 'styled-components'
import InputUi from './InputUi'

const SelectCustom = (props) => {
    const { label, placeholder, onChange, value, error = false, errorMessage, data, datePicker = false } = props
    const [showDropdown, setShowDropdown] = useState(false)
    const [valueDropDowm, setValueDropDowm] = useState("");
    const [searchInput, setSearchInput] = useState("")
    const RenderDropdownItem = (props) => {
        const { label, value } = props.content
        return <DropdownItem onClick={props.onClick}>{label}</DropdownItem>
    }
    // === filter by serach input ===
    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = data.filter((item) => {
                return item.label.toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else {
            setFilteredResults(data)
        }
    }
    return (
        <>
            <FormContainer >
                <InputUi label={label} icon errorMessage={errorMessage} name={label} id={label} placeholder={placeholder} onClick={() => setShowDropdown(!showDropdown)} value={valueDropDowm} error={error} readOnly={datePicker} />
                {data && data?.length !== 0 && < DropdownContainer showDropdown={showDropdown}>
                    <>
                        <SearchInput
                            placeholder="جستجو..."
                            variant="standard"
                            type="text"
                            value={searchInput}
                            onChange={(e) => searchItems(e.target.value)}
                        />
                        {
                            searchInput !== '' ?
                                filteredResults?.map((item, index) => {
                                    return <RenderDropdownItem content={item} onClick={() => { setValueDropDowm(item.label); setShowDropdown(false) }} key={index} />
                                })
                                : data?.map((item, index) => {
                                    return <RenderDropdownItem content={item} onClick={() => { setValueDropDowm(item.label); setShowDropdown(false) }} key={index} />
                                })
                        }

                    </>
                </DropdownContainer>}
            </FormContainer >
            {showDropdown && < BackDrop onClick={() => setShowDropdown(false)} />}
        </>
    )
}

export default SelectCustom




const FormContainer = styled.div`
    position: relative;
`
const DropdownContainer = styled.ul`
/* overflow: hidden; */
position: absolute;
border-radius: 10px;
max-height: 150px;
overflow: auto;
top: 97px;
left: 0;
right: 0;
z-index: 9999;
background-color: #e5e5e5;
height: ${props => props.showDropdown ? "200px" : 0};
transition: all 0.3s ease;
`
const DropdownItem = styled.li`
cursor: pointer;
    padding: 14px 10px;
    border-bottom: 1px solid #fff;
    border-radius: 5px;
    background-color: #e7e4e4;
    transition: all 0.3s ease;
    &:hover{
        background-color:${props => props.theme.primary};
        color:${props => props.theme.text.white};
    }
`
const BackDrop = styled.div`
position: fixed;
inset: 0;
width: 100%;
height: 100%;
z-index: 999;
`
const SearchInput = styled.input`
width: 100%;
padding: 3px 10px;
border-color:transparent;
border-width:1px;
border-radius: 10px;
  height: 40px;
  font-size: 12px;
  font-family: inherit;
  line-height: 1;
  &::placeholder {
  color: ${props => props.theme.text.primary};
}
  &:is(:active,:hover,:focus,:focus-visible) {
  border-color: ${props => props.theme.primary};
}
  &:is(:focus-visible) {
  outline-color: ${props => props.theme.primary};
}
`