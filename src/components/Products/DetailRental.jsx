import React from 'react'
import Image from 'next/image'
// === container ===
import CardWrapper from '@/src/containers/Layout/CardWrapper'
import styled from 'styled-components'

// === image === 
import map from "../../../assets/images/Maps.png"
import carImage from "../../../assets/images/car9.png"
import ReservationCarsItem from '../ReservationCars/ReservationCarsItem'
import { Divider } from '@mui/material'
import { separationOfNumbers } from 'src/utils/separationOfNumbers'


const DetailRental = () => {
    return (
        <CardWrapper title="جزئیات رزرو">
            <MapContainer>
                <Image src={map} alt="mapDetail" />
            </MapContainer>
            {/* === Prodcut detail === */}
            <DetailRentalContainer>
                <ProductImage>
                    <Image src={carImage} alt="car" fill />
                </ProductImage>
                <ProductDesctionContainer>
                    <ProductDetailContainer>
                        <h3>
                            Nissan GT-R
                        </h3>
                        <CardCode>
                            #9761
                        </CardCode>
                    </ProductDetailContainer>
                    <ProductDesction>
                        اسپورت
                    </ProductDesction>
                </ProductDesctionContainer>

            </DetailRentalContainer>
            {/* === reservtion detail === */}
            <ReservationCarsItem title="شروع رزرو" style={{ padding: 0, margin: "24px 0" }} />
            <ReservationCarsItem title="پایان رزرو" colorMark="secondary" style={{ padding: 0 }} />
            <Divider variant="middle" sx={{ my: 4, mx: 0 }} />
            {/* ===  Footer === */}
            <Footer>
                <FooterDescription>
                    <TotalTitle>
                        قیمت کل اجاره
                    </TotalTitle>
                    <ProductDesction>
                        قیمت کلی و شامل تخفیف اجاره
                    </ProductDesction>
                </FooterDescription>
                <TotalPrice>
                    {separationOfNumbers(1300000) + " "+ "تومان"}
                </TotalPrice>
            </Footer>

        </CardWrapper>
    )
}

export default DetailRental

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 220px;
    max-height:272px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
   & img{
   width: 100%;
   height: 100%;
    }
`
const DetailRentalContainer = styled.div`
display: flex;
/* justify-content: space-between; */
gap:20px;
width: 100%;
margin-top: 24px;
`
const ProductDetailContainer = styled.div`
display: flex;
justify-content: space-between;
width:100%;
`
const ProductImage = styled.div`
position: relative;
width: 130px;
height: 100%;
min-height: 90px;
max-height: 100px;
border-radius: 10px;
& img{
    object-fit: contain;
}
`
const ProductDesctionContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
width: 70%;
`
const ProductDesction = styled.span`
font-size: 12px;
color: ${props => props.theme.text.secondary};
`
const CardCode = styled.span`
color: ${props => props.theme.text.primary};
font-size: 14px;
font-weight: 600;
`
// == Footer Card ===
const Footer = styled.footer`
display: flex;
justify-content: space-between;
align-items:center;
`
const TotalPrice = styled.h2`
font-size: 20px;
`
const FooterDescription = styled.div`
`
const TotalTitle = styled.h3`
font-size: 16px;
margin-bottom: 8px;
`
