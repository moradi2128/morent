import { useState } from "react";

// === Layout ===
import Layout from "@/src/containers/Layout";
import Ads from "@/src/components/Ads";
import ContainerBody from "@/src/containers/Layout/Container";
import ProductContainer from "@/src/containers/Layout/ProductContainer";
// === Components ===
import ButtonUi from "src/subComponents/ButtonUi";
import ReservationCars from "@/src/components/ReservationCars/ReservationCars";
import PopularCar from "@/src/components/Products/PopularCar";
import RecomendationCar from "@/src/components/Products/RecomendationCar";

export default function Home() {
  return (
    <>
      <Layout >
        <ContainerBody>
          {/* === Ads === */}
          <Ads />
          {/* <SwiperCard/> */}
          <ReservationCars /> 
          {/* === Popular Car ===*/}
          <ProductContainer title="ماشین های محبوب"
            leftItem={
              <ButtonUi href="/viewAll" type="outlined" sx={{ color: "#3563E9", fontSize: "12px" }}>
                مشاهده همه
              </ButtonUi>} >
            <PopularCar />
          </ProductContainer>
          {/* ===  Recomendation Car === */}
          <ProductContainer title="خودروی پیشنهادی">
            <RecomendationCar />
          </ProductContainer>
        </ContainerBody>
      </Layout>
    </>
  )
}

