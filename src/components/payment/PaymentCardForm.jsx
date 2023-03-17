import styled from 'styled-components'
// === comoenents ===
import CalenderDatePicker from 'src/subComponents/CalenderDatePicker'
import InputUi from 'src/subComponents/InputUi'

const PaymentCardForm = ({ props }) => {
    const { errors, touched, values, handleChange } = props
    return (
        <Wrapper>
            <InputUi
                styleContainer={{ backgroundColor: "#fff" }}
                label="شماره کارت"
                name="cardNumber"
                placeholder="شماره کارت"
                onChange={handleChange}
                value={values?.cardNumber}
                errorMessage={errors?.cardNumber}
                error={errors?.cardNumber && touched?.cardNumber}
            />
            {/* <CalenderDatePicker inputStyle={{ backgroundColor: "#fff" }} label="تاریخ انقضا" placeholder="تاریخ انقضا" errorMessage="لطفا تاریخ کارت خود را وارد کنید" /> */}
            <CardHolderContainer >
                <InputUi
                    styleContainer={{ backgroundColor: "#fff" }}
                    label="تاریخ انقضا"
                    placeholder="ماه"
                    name="cardHolder"
                    onChange={handleChange}
                    // value={values?.cardHolder}
                    errorMessage="لطفا تاریخ کارت خود را وارد کنید"
                    error={errors?.cardHolder && touched?.cardHolder}
                />
                <InputUi
                    styleContainer={{ backgroundColor: "#fff" }}
                    label=" "
                    placeholder="سال"
                    name="cardHolder"
                    onChange={handleChange}
                    // value={values?.cardHolder}
                    errorMessage="لطفا تاریخ کارت خود را وارد کنید"
                    error={errors?.cardHolder && touched?.cardHolder}
                />
            </CardHolderContainer>

            <InputUi
                styleContainer={{ backgroundColor: "#fff" }}
                label="دارنده کارت"
                placeholder="دارنده کارت"
                name="cardHolder"
                onChange={handleChange}
                value={values?.cardHolder}
                errorMessage={errors?.cardHolder}
                error={errors?.cardHolder && touched?.cardHolder}
            />

            <InputUi
                type="tel"
                styleContainer={{ backgroundColor: "#fff" }}
                label="CVC"
                placeholder="CVC"
                name="cvc"
                onChange={handleChange}
                value={values?.cvc}
                errorMessage={errors?.cvc}
                error={errors?.cvc && touched?.cvc}
            />
        </Wrapper>
    )
}

export default PaymentCardForm
const Wrapper = styled.div`
display: grid;
gap: 1.5rem;
grid-template-columns: 1fr;
@media (min-width:900px) {
    grid-template-columns: repeat(2,1fr);
}
`
const CardHolderContainer = styled.div`
display: flex;
align-items: end;
gap:1rem;
`