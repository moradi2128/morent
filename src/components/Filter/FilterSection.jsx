import React, { useState } from 'react'
import { categoryData } from 'dummy'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import SliderUi from 'src/subComponents/SliderUi'
import FilterItem from './FilterItem'
import { separationOfNumbers } from 'src/utils/separationOfNumbers'

const FilterSection = ({ onChange }) => {
    const [priceSlideValue, setPriceSlideValue] = useState(100000)
    return (
        <Wrapper >
            {/* === Filter category === */}
            {categoryData?.map((category) => {
                return <CategoryItem title={category.title} key={category.id}>
                    {category?.subcategory.map((item) => {
                        return <FilterItem content={item} key={item.id} onChange={onChange} />
                    })}
                </CategoryItem>
            })}
            {/* === Price Slider === */}
            <CategoryItem title="قیمت" >
                <SliderUi value={priceSlideValue} min={10000} defaultValue={priceSlideValue} step={10000} max={125000} onChange={(e) => setPriceSlideValue(e.target.value)} />
                <SliderValue>بیشترین مبلغ : {separationOfNumbers(priceSlideValue) + " " + "تومان"}</SliderValue>
            </CategoryItem>
        </Wrapper>
    )
}

export default FilterSection
const Wrapper = styled.div`
background:${props => props.theme.bgWhite};
border-left: 1px solid #F3F5F7;
padding:32px;
width:100%;
/* position:absolute;
inset:0; */
/* height:100vh; */
`
const SliderValue = styled.p`
color:${props => props.theme.text.secondary};
font-weight: 600;
font-size: 14px;
line-height: 150%;
`