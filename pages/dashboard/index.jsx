import React from 'react'
import styled from 'styled-components'
import { Grid } from '@mui/material'
// === Container ===
import Layout from '@/src/containers/Layout'
import ContainerBody from '@/src/containers/Layout/Container'

// === compoentns ===
import MenuDrawer from '@/src/components/MenuDrawer'
import DetailRental from "@/src/components/Products/DetailRental"
import TopRental from '@/src/components/TopRental'
import RecentTransaction from '@/src/components/RecentTransaction'
import AnimationLayout from '@/src/containers/Layout/AnimationLayout'
const index = () => {
    return (
        <AnimationLayout>
            <Layout footer={false}>
                <Wrapper>
                    <MenuDrawer />
                    <ContainerBody style={{ marginTop: "32px" }}>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <DetailRental />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Grid container spacing={4}>
                                    {/*  === chart === */}
                                    <Grid item xs={12} >
                                        <TopRental />
                                    </Grid>
                                    {/*  === Recent Transaction === */}
                                    <Grid item xs={12} >
                                        <RecentTransaction />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </ContainerBody>
                </Wrapper>
            </Layout>
        </AnimationLayout>
    )
}

export default index

const Wrapper = styled.div`
display: flex;
`