import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import { HeartIcon, LifebuoyIcon, CubeTransparentIcon, UsersIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import IconUi from 'src/subComponents/IconUi'
import { IconButton } from '@mui/material'
import CardFooter from './CardFooter'
import Link from 'next/link'
const CardCarItem = (props) => {
  const { mobileMode = false, href } = props
  const { id,
    title,
    type,
    price,
    priceUnit,
    btnTittle,
    newPrice,
    alt,
    bgImage,
    tankVolume,
    capacity,
    isLicked,
    manual,
  } = props.car;

  return (
    <Wrapper>
      {/* === Header === */}
      <Header >
        <div>
          <Title>
            <Link href={`${href?.patchname}`}>
              {title}
            </Link>
          </Title>
          <Type>
            {type}
          </Type>
        </div>
        <div>
          <HeartButton
            // onClick={handleClick}
            size="small"
          >
            <IconUi>
              {isLicked ?
                <HeartIconSolid style={{ color: "#ED3F3F" }} />
                :
                <HeartIcon />
              }
            </IconUi>
          </HeartButton>
        </div>
      </Header >
      <BodeContainer mobileMode={mobileMode}>
        {/* ===  Image === */}
        <ImageLink href={`${href?.patchname}`} >
          <ImageContainer mobileMode={mobileMode}>
            <Image src={bgImage} alt={alt} layout="responsive" />
          </ImageContainer>
        </ImageLink>
        {/* === Description === */}
        <DescriptionContainer mobileMode={mobileMode}>
          <DescriptionItem mobileMode={mobileMode}>
            <IconUi>
              <CubeTransparentIcon />
            </IconUi>
            <p>{tankVolume + " " + "لیتر"}</p>
          </DescriptionItem>
          <DescriptionItem mobileMode={mobileMode}>
            <IconUi>
              <LifebuoyIcon />
            </IconUi>
            <p>{manual}</p>
          </DescriptionItem>
          <DescriptionItem mobileMode={mobileMode}>
            <IconUi>
              <UsersIcon />
            </IconUi>
            <p>{capacity + " " + "نفر"}</p>
          </DescriptionItem>
        </DescriptionContainer>
      </BodeContainer>
      {/* === Footer === */}
      <CardFooter newPrice={newPrice} price={price} href="/payment" />
    </Wrapper>
  )
}

export default CardCarItem
const Wrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap:2rem;
padding:16px;
transition: all .3s ease;
&:hover{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
background-color:${props => props.theme.bgWhite};
border-radius: 10px;
@media (min-width:768px) {
    padding:24px;
    min-height: 425px;
}
`
const Header = styled.div`
display:flex;
justify-content:space-between;
`
const Title = styled.h5`
font-weight: 700;
font-size: 20px;
line-height: 150%;
& a{
  color:${props => props.theme.text.primary};
}
`
const HeartButton = styled(IconButton)`
&:hover svg{
  color:#ED3F3F
}
`
const Type = styled.span`
font-weight: 700;
font-size: 12px;
line-height: 150%;
color:${props => props.theme.text.secondary};
`
const ImageContainer = styled.div`
width:80%;
min-height: 100px;
height:100%;
max-height:110px;
justify-content: center;
align-items: center;
display: flex;
margin: 30px auto;
position: relative;
flex: ${props => props.mobileMode && 4};
/* &::before{
  content:"";
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 50%;
  z-index: 1;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%);
} */
`
const ImageLink = styled(Link)`
  width:100%
`
const DescriptionContainer = styled.div`
display:flex;
align-items:${props => props.mobileMode ? "flex-start" : "center"};
justify-content:space-between;
@media (max-width:768px){
  flex-direction: ${props => props.mobileMode ? "column" : "row"};
  justify-content:${props => props.mobileMode ? "center" : "space-between"};
  flex: ${props => props.mobileMode && 2};
    }
`
const DescriptionItem = styled.div`
display:flex;
align-items:center;
gap:5px;
margin:12px 0;
color:${props => props.theme.text.secondary};
& p{
  font-weight: 500;
font-size: 12px;
line-height: 18px;
};
`
const BodeContainer = styled.div`
    @media (max-width:768px){
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      flex-direction:${props => props.mobileMode ? "row" : "column"};

    }
`