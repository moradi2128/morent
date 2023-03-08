import { styled as styledMui } from '@mui/material/styles';
import React, { useState } from 'react'
import styled from 'styled-components'
import PaymentFormContainer from './PaymentFormContainer'
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// === image ===
import mellatBank from "../../../assets/images/payment/mellatBank.png"
import melliBank from "../../../assets/images/payment/melliBank.png"
import { Radio } from '@mui/material';
import Image from 'next/image';
import PaymentCardForm from './PaymentCardForm';
//  === formik ===
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
const Accordion = styledMui((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    borderRadius: "10px",
    marginBottom: "10px",
    background: "#F6F7F9",
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styledMui((props) => (
    <MuiAccordionSummary
        expandIcon={<div sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    height: "56px",
    paddingLeft: 0,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styledMui(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
}));



const PaymentMethod = ({ bindSubmitForm, triggerSubmit }) => {
    const [expanded, setExpanded] = useState('mellat');
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);

    }
    const paymentCard = [
        {
            title: "بانک ملت",
            img: mellatBank,
            valueAccordion: "mellat"
        },
        {
            title: "بانک ملی",
            img: melliBank,
            valueAccordion: "melli"
        },
    ]


    const PaymentSchema = Yup.object().shape({
        cardNumber: Yup.string()
            .min(2, 'نام وارد شده معتبر نیست')
            .max(20, 'نام وارد شده بیشتر از 20 حرف می باشد')
            .required("لطفا شماره کارت خود را وارد کنید"),
        // date: Yup.string().min(9, "شماره وارد شده معبر نمی باشد").required("لطفا شماره تماس خود را وارد کنید"),
        cardHolder: Yup.string().required("لطفا نام کارت خود را وارد کنید"),
        cvc: Yup.string().required("لطفا CVC کارت خود را وارد کنید")
    });

    const [isSubmitted, setIsSubmitted] = useState(false)
    const initialFormValues = {
        cardNumber: '',
        ExpirationDate: '',
        cardHolder: '',
        cvc: '',
        bankName: expanded
    }
    const onSubmit = (values, { resetForm }) => {
        if (!isSubmitted) {
            triggerSubmit();
            setIsSubmitted(true)
        }

        //resetForm();
    }
    const formikProps = {
        initialValues: initialFormValues,
        onSubmit,
    }

    return (
        <PaymentFormContainer title="اطلاعات صورت حساب" subTitle="لطفا روش پرداخت خود را وارد کنید" activeStep={3}>
            {
                paymentCard.map((card, index) => {
                    return <Accordion key={index} expanded={expanded == card.valueAccordion} onChange={handleChange(card.valueAccordion)}>
                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                            <AccordionSummaryContaienr>
                                <HeaderContainer>
                                    <Radio
                                        checked={expanded === card.valueAccordion}
                                        onChange={handleChange(card.valueAccordion)}
                                        value={expanded}
                                        name="radio-buttons"
                                    // inputProps={{ 'aria-label': 'A' }}
                                    />
                                    <HeaderAccordion>{card.title}</HeaderAccordion>
                                </HeaderContainer>
                                <LogoBank {...card.img} />
                            </AccordionSummaryContaienr>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Formik
                                {...formikProps}
                                validationSchema={expanded === card.valueAccordion ? PaymentSchema : null}
                            >
                                {(props) => {
                                    bindSubmitForm(props.submitForm)
                                    return <Form onSubmit={props.handleSubmit}>
                                        <PaymentCardForm props={props} />
                                    </Form>
                                }}
                            </Formik>
                        </AccordionDetails>
                    </Accordion>

                })
            }
        </PaymentFormContainer >
    )
}

export default PaymentMethod

const HeaderAccordion = styled.div`
                        font-weight: 600;
                        font-size: 16px;
                        line-height: 150%;
                        `
const HeaderContainer = styled.div`
                        display: flex;
                        align-items: center;
                        gap:3px;
                        `
const LogoBank = styled(Image)`
                        width: 40px;
                        height: 40px;
                        `
const AccordionSummaryContaienr = styled.div`
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        `