import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// === conmpoenets ====
import ButtonUi from 'src/subComponents/ButtonUi'
import CheckboxUi from 'src/subComponents/CheckboxUi'
// === Contrainer ===
import PaymentFormContainer from './PaymentFormContainer'
// === Image ===
import safeIcon from "../../../assets/images/safeIcon.png"
const ConfirmationForm = ({ submitHandler }) => {
    const [sendMail, setSeneMail] = useState(false)
    const [privacyPolicy, setPrivacyPolicy] = useState(false)

    return (
        <PaymentFormContainer title="تاییده" subTitle="لطفا روش پرداخت خود را وارد کنید" activeStep={4}>
            <CheckboxContainar>
                <CheckboxUi
                    checked={sendMail}
                    onChange={(e) => setSeneMail(e.target.checked)} >
                    <Label>
                        من با ارسال ایمیل های بازاریابی و خبرنامه موافقم. بدون هرزنامه، قول داده شده!
                    </Label>
                </CheckboxUi>
            </CheckboxContainar>
            <CheckboxContainar>
                <CheckboxUi
                    checked={privacyPolicy}
                    onChange={(e) => setPrivacyPolicy(e.target.checked)} >
                    <Label>
                        من با شرایط و ضوابط و سیاست حفظ حریم خصوصی ما موافقم.
                    </Label>
                </CheckboxUi>
            </CheckboxContainar>
            <ButtonUi style={{ padding: "16px 32px", borderRadius: "10px" }} onClick={submitHandler}>
                رزرور
            </ButtonUi>
            <SafeMessage>
                <SafeImgContaeiner>
                    <Image src={safeIcon} alt="safe data" fill />
                </SafeImgContaeiner>
                <SafeTitle>همه داده های شما امن است</SafeTitle>
                <SafeDescription>ما از پیشرفته ترین امنیت استفاده می کنیم تا بهترین تجربه را به شما ارائه دهیم.</SafeDescription>
            </SafeMessage>
        </PaymentFormContainer>
    )
}

export default ConfirmationForm
const CheckboxContainar = styled.div`
    height: 56px;
    justify-content: start;
    display: flex;
    align-items: center;
    padding: 15px 34px;
    background-color: ${props => props.theme.light};
    border-radius: 10px;
    margin-bottom: 24px;
`
const Label = styled.p`
font-weight: 500;
/* font-size: 13px; */
color: ${props => props.theme.text.primary};
`
const SafeMessage = styled.div`
margin-top:24px;
display: flex;
flex-direction: column;
gap: 8px;
`
const SafeImgContaeiner = styled.div`
    position: relative;
    width:25px;
    height:25px;

`
const SafeTitle = styled.h4`
font-weight: 600;
font-size: 14px;
line-height: 150%;
`
const SafeDescription = styled.p`
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 150%;
color: ${props => props.theme.text.secondary};
`
