import React from 'react'
import { memo } from 'react'

import ButtonUi from 'src/subComponents/ButtonUi'
import { separationOfNumbers } from 'src/utils/separationOfNumbers'
import styled from 'styled-components'

const CardFooter = (props) => {
    const { newPrice, price, href } = props

    return (
        <Wrapper>
            <div>
                <NewPrice>
                    {(newPrice && separationOfNumbers(newPrice) || separationOfNumbers(price)) + "تومان" + "/"}
                    <UnitPrice>روز</UnitPrice>
                </NewPrice>
                {newPrice &&
                    <OldPrice>
                        {(price && separationOfNumbers(price) || separationOfNumbers(newPrice)) + "تومان"}
                    </OldPrice>}
            </div>
            {href && <ButtonUi href={`${href}`} style={{ padding: "10px 20px", fontSize: "12px" }}>
                اکنون اجاره کنید
            </ButtonUi>}
        </Wrapper>
    )
}

export default memo(CardFooter)

const Wrapper = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex-flow:wrap;
`
const NewPrice = styled.h4`
font-weight: 700;
font-size: 16px;
line-height: 25px;
color:${props => props.theme.text.primary};
@media (max-width:768px){
    font-size: 12px;
}
`
const OldPrice = styled.s`
color:${props => props.theme.text.secondary};
font-weight: 700;
font-size: 12px;
line-height: 18px;
@media (max-width:768px){
    font-size: 10px;
}
`
const UnitPrice = styled.span`
color:${props => props.theme.text.secondary};
font-size: 12px;
margin: 0 5px;
`