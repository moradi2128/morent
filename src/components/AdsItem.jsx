
import React from 'react'
import LinkUi from 'src/subComponents/LinkUi'
import styled from 'styled-components'

const AdsItem = (props) => {
    const { id, title, description, btnTittle, bgImage, bgColor, alt, href, colorBtn } = props.ads
    return (
        <Wrapper>
            {/* === img background === */}
            <BgContainer style={{ backgroundColor: bgColor }}>
                <BgImg {...bgImage} alt={alt} />
            </BgContainer>
            {/* === body === */}
            <BodyContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <LinkUi href={`${href}`} color={colorBtn}>
                    {btnTittle}
                </LinkUi>
            </BodyContainer>
        </Wrapper>
    )
}

export default AdsItem

const Wrapper = styled.div`
display:flex;
flex:1;
border-radius: 10px;
overflow: hidden;
padding:24px;
position: relative;
min-height:360px;
`
const BgContainer = styled.div`
width:100%;
height:100%;
position: absolute;
inset: 0;
z-index:0;
`
const BgImg = styled.img`
width: 100%;
height: 100%;
object-fit: contain;
max-height:360px;
-webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`
// === Body ===
const BodyContainer = styled.div`
position: relative;
z-index:1;
max-width:270px;
`
const Title = styled.h2`
font-size: 30px;
line-height: 150%;
font-weight: 600;
margin-bottom:1rem;
color:#fff;
`
const Description = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 150%;
margin-bottom:1.5rem;
color:#fff;
`
// const LinkNext = styled(MUILink)`
// padding: 10px 20px;
// background: ;
// border-radius: 4px;
// color:#fff;
// font-weight: 500;
// font-size: 16px;
// line-height: 150%;
// `