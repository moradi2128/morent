import { Grid } from '@mui/material'
import React, { useState } from 'react'
import RatingUi from 'src/subComponents/RatingUi'
import styled from 'styled-components'
import CardContainer from '../CardContaienr'
import CardFooter from './CardFooter'


const ProductDetail = () => {
    const [showDetail, setShowDetail] = useState(false)
    const RenderSpecifications = ({ item }) => {
        return <Grid item xs={6}>
            <SpecificationsContainer>
                <TitleSpecifications>
                    {item.label}
                </TitleSpecifications>
                <ValueSpecifications>
                    {item.value}
                </ValueSpecifications>
            </SpecificationsContainer>
        </Grid>
    }
    const specifications = [
        {
            label: "مدل",
            value: "اسپورت"
        },
        {
            label: "ظرفیت",
            value: "2 نقر "
        },
        {
            label: "فرمان",
            value: "دستی"
        },
        {
            label: "ظرفیت باک",
            value: "70 لیتر"
        },
    ]
    return (
        <CardContainer style={{ margin: "32px 0" }}>
            {/* === Header === */}
            <Header>
                <Title>NissanGT_T</Title>
                <RatingContainer>
                    <RatingUi value={3} onChange={(event, newValue) => {
                        // Todo rating Handler 
                        // console.log('event :>> ', event);
                        // console.log('newValue :>> ', newValue);
                    }} />
                    <Reviewer>
                        440+ بازدید
                    </Reviewer>
                </RatingContainer>
            </Header>
            {/* === Body === */}
            <Body>
                <DiscriptionContaioner>
                    <Discription showDetail={showDetail} onClick={() => setShowDetail(!showDetail)}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </Discription>
                    <DiscriptionBtn onClick={() => setShowDetail(!showDetail)}>{showDetail ? "مخفی کردن" : "نمایش بیشتر"}</DiscriptionBtn>
                </DiscriptionContaioner>
                <Grid container columnSpacing={8} rowSpacing={2}>
                    {
                        specifications?.map((item, index) => {
                            return <RenderSpecifications item={item} key={index} />
                        })
                    }
                </Grid>
            </Body>
            {/* <CardFooter newPrice={"122000"} price={"100000"} href={{ patchname: `/payment/${car.slug}`, query: { slug: car.id } }} /> */}
            <CardFooter newPrice={"122000"} price={"100000"} href="/payment" />
        </CardContainer>
    )
}

export default ProductDetail
// const Wrapper = styled.div`
// padding:16px;
// background-color:${props => props.theme.bgWhite};
// border-radius: 10px;

// @media (min-width:768px) {
//     padding:24px;
// }
// `
// === Header ===
const Header = styled.header`
margin-bottom:2rem;
`
const Title = styled.h2`
margin-bottom: 6px;
@media (max-width:768px) {
    font-size:20px;
}
`
const RatingContainer = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;
`
const Reviewer = styled.div`
font-size: 14px;
line-height: 15px;
font-weight: 500;
color:${props => props.theme.text.secondary};
`
// === Body ===
const Body = styled.div`
margin-bottom: 32px;
`
const DiscriptionContaioner = styled.div`
position: relative;
`
const Discription = styled.p`
    overflow: hidden;
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 26px;
text-align: justify;
color:${props => props.theme.text.secondary};
margin-bottom:2rem;

cursor: pointer;
position: relative;
display: -webkit-box;
-webkit-line-clamp:${props => props.showDetail ? "unset" : 4} ;
-webkit-box-orient: vertical;


& button {
    padding: 3px !important;
    font-size: 10px !important;
    font-weight: 400 !important;
    position: absolute;
    bottom: 0;
    left: 0;
}
&:after {
content: "";
width: ${props => props.showComment ? "unset" : "120%"};
height: 30px;
background: linear-gradient(90deg, #ffffff 10%, transparent);
position: absolute;
bottom: 0;
left: 0;
transition: all 0.3s ease;
}
`
const DiscriptionBtn = styled.div`
cursor: pointer;
    position: absolute;
    bottom: 6px;
    left: 0;
    font-size: 10px;
    color: gray;
    font-weight: 600;
    border-bottom: 1px solid gray;
`
const SpecificationsContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
const TitleSpecifications = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 26px;
color:${props => props.theme.text.secondary};
`
const ValueSpecifications = styled.p`
font-weight: 600;
font-size: 12px;
line-height: 26px;
/* color:${props => props.theme.text.secondary}; */
`