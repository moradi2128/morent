
import { Form, Formik } from 'formik'
import InputUi from 'src/subComponents/InputUi'
import styled from 'styled-components'
import PaymentFormContainer from './PaymentFormContainer'
import * as Yup from 'yup';
import ButtonUi from 'src/subComponents/ButtonUi';
import { useState } from 'react';

const BilingInfoSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'نام وارد شده معتبر نیست')
        .max(20, 'نام وارد شده بیشتر از 20 حرف می باشد')
        .required("لطفا نام خود را وارد کنید"),
    phoneNumber: Yup.string().min(9, "شماره وارد شده معبر نمی باشد").required("لطفا شماره تماس خود را وارد کنید"),
    address: Yup.string().required("لطفا آدرس خود را وارد کنید"),
    location: Yup.string().required("لطفا استان یا شهر خود را وارد کنید")
});
const BillingInfoForm = ({ bindSubmitForm, triggerSubmit }) => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const initialFormValues = {
        fullName: '',
        address: '',
        phoneNumber: '',
        location: '',
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
        validationSchema: BilingInfoSchema,
        onSubmit,
    }
    return (
        <PaymentFormContainer title="اطلاعات صورتحساب" subTitle="لطفااطلاعات صورتحساب خود را وارد کنید">
            <Formik
                vali
                {...formikProps}
            >
                {({ errors, touched, values, submitForm, handleChange, handleSubmit }) => {
                    bindSubmitForm(submitForm)
                    return <Form onSubmit={handleSubmit}>
                        <Wrapper>
                            {/* === Name ===  */}
                            <InputUi
                                label="نام"
                                name="fullName"
                                placeholder="نام شما"
                                onChange={handleChange}
                                value={values.fullName}
                                errorMessage={errors.fullName}
                                error={errors?.fullName && touched.fullName}
                            />
                            {/* === Address=== */}
                            <InputUi
                                label="آدرس"
                                name="address"
                                placeholder="آدرس"
                                onChange={handleChange}
                                errorMessage={errors.address}
                                error={errors.address && touched.address} />
                            {/* === phoneNumber === */}
                            <InputUi
                                type="tel"
                                label="شماره تماس"
                                name="phoneNumber"
                                placeholder="شماره تماس"
                                onChange={handleChange}
                                errorMessage={errors.phoneNumber}
                                error={errors.phoneNumber && touched.phoneNumber} />
                            {/* === Location === */}
                            <InputUi
                                label="استان/شهر"
                                name="location"
                                placeholder="استان یا شهر"
                                onChange={handleChange}
                                errorMessage={errors.location}
                                error={errors.location && touched.location ? true : false} />
                        </Wrapper>
                    </Form>
                }}
            </Formik>
        </PaymentFormContainer>
    )
}

export default BillingInfoForm
const Wrapper = styled.div`
display: grid;
gap: 1.5rem;
grid-template-columns: 1fr;
@media (min-width:900px) {
    grid-template-columns: repeat(2,1fr);
}
`
