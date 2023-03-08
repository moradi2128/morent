import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { separationOfNumbers } from 'src/utils/separationOfNumbers'
import styled from 'styled-components'
import carImage from "../../assets/images/car-1.png"
const RecentTransactionItem = () => {
    return (
        <li >
            <DetailRentalContainer href="/">
                <ProductImage>
                    <Image src={carImage} alt="car" fill />
                </ProductImage>
                <ProductDesctionContainer>
                    <ProductDetailContainer>
                        <ProductTitle>
                            Nissan GT-R
                        </ProductTitle>
                        <ProductDesction>
                            اسپورت
                        </ProductDesction>
                    </ProductDetailContainer>
                    <ProductDetailContainer>
                        <ProductDesction>
                            23 اردیبهشت
                        </ProductDesction>
                        <CardCode>
                            {separationOfNumbers(130000) + " " + "تومان"}
                        </CardCode>
                    </ProductDetailContainer>
                </ProductDesctionContainer>

            </DetailRentalContainer>
        </li>
    )
}

export default RecentTransactionItem;

const DetailRentalContainer = styled(Link)`
display: flex;
/* justify-content: space-between; */
gap:20px;
width: 100%;
& :not(:last-child){margin-bottom: 10px;}
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
const ProductDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`
const ProductTitle = styled.h3`
color: ${props => props.theme.text.primary};

`
const ProductDesctionContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 70%;
`
const ProductDesction = styled.span`
font-size: 12px;
color: ${props => props.theme.text.secondary};
`
const CardCode = styled.div`
color: ${props => props.theme.text.primary};
font-size: 14px;
font-weight: 600;
`