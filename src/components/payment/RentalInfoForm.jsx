
import { locationSelecData } from 'dummy'
import React, { useState } from 'react'
import CalenderDatePicker from 'src/subComponents/CalenderDatePicker'
import Mark from 'src/subComponents/Mark'
import SelectCustom from 'src/subComponents/SelectCustom'
import styled from 'styled-components'
import PaymentFormContainer from './PaymentFormContainer'
const RentalInfoForm = () => {
    const [value, onChange] = useState('10:00');
    return (
        <PaymentFormContainer title="اطلاعات اجاره" subTitle="لطفا تاریخ اجاره خود را انتخاب کنید" activeStep={2}>
            {/* == Pick-up === */}
            <Mark title="شروع رزور" />
            <Wrapper>
                <SelectCustom label="موقعیت مکانی" placeholder="شهر خود را انتخاب کنید" data={locationSelecData} />
              <SelectCustom label="زمان" placeholder="زمان خود را انتخاب کنید" /> 
                <CalenderDatePicker label="تاریخ" placeholder="تاریخ خود را انتخاب کنید" />
            </Wrapper>
            {/* ===  Drop-of ===*/}
            <Mark title="پایان رزور" color="secondary" />
            <Wrapper>
                <SelectCustom label="موقعیت مکانی" placeholder="شهر خود را انتخاب کنید" />
                <SelectCustom label="زمان" placeholder="زمان خود را انتخاب کنید" />
                <CalenderDatePicker label="تاریخ" placeholder="تاریخ خود را انتخاب کنید" />
            </Wrapper>
        </PaymentFormContainer>
    )
}

export default RentalInfoForm
const Wrapper = styled.div`
display: grid;
column-gap: 1.5rem;
row-gap: .5rem;
grid-template-columns: 1fr;
margin-bottom:32px;
@media (min-width:900px) {
    grid-template-columns: repeat(2,1fr);
}
`
