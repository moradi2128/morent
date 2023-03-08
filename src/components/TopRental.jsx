import React from 'react'
import styled from 'styled-components'
import CardWrapper from '../containers/Layout/CardWrapper'
import DoughnutChart from './chart/DoughnutChart'

const TopRental = () => {
    return (
        <CardWrapper title="5 خودرو اجاره برتر">
            <ChartContainer>
                <DoughnutChart />
            </ChartContainer>
        </CardWrapper>
    )
}

export default TopRental
const ChartContainer = styled.div`
width:50% ;
margin: auto;
`