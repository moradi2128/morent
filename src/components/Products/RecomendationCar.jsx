import { producstData } from 'dummy'
import React, { useMemo, useState } from 'react'
import CardCarItem from './CardCarItem'
import ProductLayout from '@/src/containers/Layout/ProductLayout'
import ButtonUi from 'src/subComponents/ButtonUi'
import styled from 'styled-components'
import CardSkeleton from '../skeleton/CardSkeleton'
import axios from "../../api/axios-orders"
const RecomendationCar = ({ data = producstData }) => {
    const [count, setCount] = useState(1)
    const getPage = async (page = count) => {
        axios.post('/cars.json', producstData)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        // TODO => fetch data
    }
    return (
        <>
            <ProductLayout >
                {data.length == 0 ? [1, 2, 3, 4].map((item) => {
                    return <CardSkeleton key={item} />
                }) : data.map((car) => {
                    return <CardCarItem href={{ patchname: `/category/${car.id}/${car.title.replace(/\s/g, '')}`, query: { slug: car.id } }} car={car} key={car.id} mobileMode />
                })
                }
            </ProductLayout>
            <Center>
                <div />
                <ButtonUi onClick={() => getPage(count + 1)}>
                    نمایش بیشتر ماشین
                </ButtonUi>
                <TotalCar>
                    120 ماشین
                </TotalCar>
            </Center>
        </>
    )
}

export default RecomendationCar
const Center = styled.div`
margin:74px 0;
display:flex;
align-items: center;
justify-content: space-between;
width:100%;
`
const TotalCar = styled.div`
font-weight: 500;
font-size: 12px;
line-height: 150%;
color:${props => props.theme.text.secondary};
`