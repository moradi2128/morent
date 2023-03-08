import React, { useState } from 'react'
import { Grid } from "@mui/material";
// === Layout ===
import Layout from '@/src/containers/Layout'
import ContainerBody from '@/src/containers/Layout/Container'
// === Components ===
import FilterSection from '@/src/components/Filter/FilterSection'
import ReservationCars from '@/src/components/ReservationCars/ReservationCars'
import RecomendationCar from "@/src/components/Products/RecomendationCar";
import styled from 'styled-components';
import AnimationLayout from '@/src/containers/Layout/AnimationLayout';

const Category = () => {
    const [filterValue, setFilterValue] = useState("")
    // const [category, setCategory] = useState(categoryData)
    // Filter change handler
    const onFilter = event => {
        console.log('event', event.target.value)
        console.log('event', event.target.checked)
        const {
            target: { value, checked }
        } = event;
        setFilterValue(value)
        console.log('filterValue', filterValue)
    };

    return (
        <AnimationLayout>
            <Layout >
                <Grid container columns={14} >
                    <GridItem item md={3} sx={{ position: "relative", maxWidth: "360px" }}>
                        <FilterSection onChange={onFilter} />
                    </GridItem>
                    <Grid item md={11} xs={14}>
                        <ContainerBody>
                            <ReservationCars />
                            <RecomendationCar />
                        </ContainerBody>
                    </Grid>
                </Grid>
            </Layout>
        </AnimationLayout>
    )
}

export default Category
const GridItem = styled(Grid)`
display:none;
@media (min-width:768px){
    display:flex;
}
`
