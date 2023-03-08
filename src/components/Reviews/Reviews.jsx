
import { useState } from 'react';
import styled from 'styled-components'
import { commentData } from "../../../dummy"
import { ArrowDownIcon } from '@heroicons/react/24/outline';
// === compoenents ===
import CardContainer from '../CardContaienr'
import ReviewItem from './ReviewItem';
import ButtonUi from 'src/subComponents/ButtonUi';
const Reviews = () => {
    const [count, setCount] = useState(1)
    const getPage = async (page = count) => {
        // TODO => fetch data
    }
    return (
        <CardContainer style={{ marginBottom: "32px" }}>
            {/* === Header === */}
            <Header>
                <Title>نظرات</Title>
                <Badge >
                    12
                </Badge>
            </Header>
            {/* === Body === */}
            {commentData?.commets.map((comment) => {
                return <ReviewItem content={comment} key={comment.id} />
            })}
            <BtnContainer>
                <ButtonUi type="callToAction"  onClick={() => getPage(count + 1)} >نمایش بیشتر
                    <ArrowDownIcon style={{ width: "15px", height: "15px",marginRight:"5px"}} />
                </ButtonUi>
            </BtnContainer>
        </CardContainer>
    )
}

export default Reviews
//  === Header ===
const Header = styled.div`
display: flex;
align-items: center;
gap:1.5rem;
margin-bottom:24px;
`
const Title = styled.h2`
font-weight: 600;
font-size: 18px;
line-height: 30px;
color: ${props => props.theme.text.primary};
`
const Badge = styled.span`
width: 44px;
height: 28px;
background-color: ${props => props.theme.primary};
color: ${props => props.theme.text.white};
display: flex;
justify-content: center;
align-items: center;
border-radius: 4px;
font-weight: 700;
font-size: 14px;
`
const BtnContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
`