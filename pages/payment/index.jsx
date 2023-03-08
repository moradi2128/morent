import Image from 'next/image'
import styled from 'styled-components'
import { Divider, Grid } from '@mui/material'
import img from "../../assets/images/car9.png"
// === contanier ===
import Layout from '@/src/containers/Layout'
import ContainerBody from '@/src/containers/Layout/Container'
// === compoennts ===
import CardContainer from '@/src/components/CardContaienr'
import RatingUi from 'src/subComponents/RatingUi'
import BillingInfoForm from '@/src/components/payment/BillingInfoForm'
import RentalInfoForm from '@/src/components/payment/RentalInfoForm'
import PaymentMethod from '@/src/components/payment/PaymentMethod'
import ConfirmationForm from '@/src/components/payment/ConfirmationForm'
import { separationOfNumbers } from 'src/utils/separationOfNumbers'

const Payment = () => {

    var submitBillingInfo = null;
    var submitPaymentMethod = null;

    const handleSubmit = () => {
        // submitForm();
        if (submitBillingInfo) { submitBillingInfo() };

        if (submitPaymentMethod) { submitPaymentMethod() };

    }
    const bindSubmitFormBillingInfo = (submitForm) => {
        submitBillingInfo = submitForm
    }
    const bindSubmitFormPaymentMethod = (submitForm) => {
        submitPaymentMethod = submitForm
    }

    return (
        <Layout>
            <ContainerBody style={{ marginTop: "32px" }}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <CardWrapper>
                            <CardContainer>
                                <TitleCard>خلاصه اجاره</TitleCard>
                                <DescriptionCard>قیمت ها ممکن است بسته به مدت زمان اجاره و قیمت ماشین کرایه ای شما تغییر کند.</DescriptionCard>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} >
                                        <BgImg {...img} alt="ads" />
                                    </Grid>
                                    <Grid item xs={8} >
                                        <div style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", height: "100%" }}>
                                            <TitleProduct>
                                                Nissan GT - R
                                            </TitleProduct>
                                            <div>
                                                <RatingUi readOnly value={4} />
                                                <Reviewer>
                                                    440+ بازدید
                                                </Reviewer>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Divider variant="middle" sx={{ my: 3 }} />
                                <Footer>
                                    <RenderPriceContainer totalTitle="جمع فرعی" price="1300000" />
                                    <RenderPriceContainer totalTitle="مالیت بر ارزش افزوده" price="0" />
                                    <RenderPriceContainer subTitle="قیمت کل اجاره " totalTitle="قیمت کلی اجاره" price="1300000" />
                                </Footer>

                            </CardContainer>
                        </CardWrapper>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <FormItem>
                            <BillingInfoForm bindSubmitForm={bindSubmitFormBillingInfo} triggerSubmit={handleSubmit} />
                            <RentalInfoForm />
                            <PaymentMethod bindSubmitForm={bindSubmitFormPaymentMethod} triggerSubmit={handleSubmit} />
                            <ConfirmationForm submitHandler={handleSubmit} />
                        </FormItem>
                    </Grid>
                </Grid>
            </ContainerBody>
        </Layout>
    )
}

export default Payment
const RenderPriceContainer = ({ totalTitle, price, subTitle }) => {
    return <ConatienrTotal>
        <div>
            {subTitle && <PriceTotal style={{ marginBottom: "8px" }}>
                {subTitle}
            </PriceTotal>}
            <TitleTotal>
                {totalTitle}
            </TitleTotal>
        </div>
        <PriceTotal>
            {separationOfNumbers(price)} تومان
        </PriceTotal>
    </ConatienrTotal>
}



const TitleCard = styled.h2`
margin-bottom: 6px;
font-size:16px;
@media (min-width:768px) {
    font-size:20px;
}
`
const BgImg = styled(Image)`
width: 100%;
height: 100%;
object-fit: cover;
max-height:100px;
position: relative;
z-index:1;
border-radius: 8px;
`
const DescriptionCard = styled.p`
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 20px;
text-align: justify;
color:${props => props.theme.text.secondary};
margin-bottom:2rem;
`
const TitleProduct = styled.h2`
margin-bottom: 6px;
@media (max-width:768px) {
    font-size:20px;
}
`
const Reviewer = styled.div`
font-size: 12px;
line-height: 15px;
font-weight: 500;
color:${props => props.theme.text.secondary};
`
const Footer = styled.div`
`
const CardWrapper = styled.div`
position: sticky;
top:30px;
`
const FormItem = styled.div`
display:flex;
flex-direction: column;
gap:2rem;
`
// === RenderPriceContainer ===
const ConatienrTotal = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 6px;
`
const TitleTotal = styled.p`
color:${props => props.theme.text.secondary};
font-weight: 500;
font-size: 12px;
line-height: 15px;
@media (min-width:768px) {
    font-size:14px;
}
`
const PriceTotal = styled.p`
/* margin-bottom: 4px; */
font-weight: 600;
font-size: 16px;
line-height: 150%;
@media (min-width:768px) {
    font-size:16px;
}
`