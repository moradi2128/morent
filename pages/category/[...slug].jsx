import { Grid } from '@mui/material'
//  === components ===
import ProductDetail from '@/src/components/Products/ProductDetail'
import RecomendationCar from '@/src/components/Products/RecomendationCar'
import Reviews from '@/src/components/Reviews/Reviews'
import SwiperThumbsGallery from '@/src/components/Swiper/thumbsGallery/SwiperThumbsGallery'
// === containers ===
import Layout from '@/src/containers/Layout'
import ContainerBody from '@/src/containers/Layout/Container'
import ProductContainer from '@/src/containers/Layout/ProductContainer'
// import AnimationLayout from '@/src/containers/Layout/AnimationLayout'
import styled from 'styled-components'
import { productData } from 'dummy'

const Product = () => {
  console.log('productData', productData)
  return (
    // <AnimationLayout>
    <Layout>
      <ContainerBody>
        <Grid container spacing={4}>
          <GridCustom item xs={12} md={6} >
            <SwiperThumbsGallery images={productData?.images} />
          </GridCustom>
          <Grid item sm={12} md={6} >
            <ProductDetail data={productData} />
          </Grid>
        </Grid>
        <Reviews />
        {/* === Recommended */}
        <ProductContainer title="خودروی پیشنهادی">
          <RecomendationCar />
        </ProductContainer>
      </ContainerBody>
    </Layout>
    // </AnimationLayout >
  )
}

export default Product

const GridCustom = styled(Grid)`
max-height:calc(70vh - 40px);
@media (min-width:768px)  {
  max-height:calc(100vh - 40px);
}
`