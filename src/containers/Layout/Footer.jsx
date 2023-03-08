import React from 'react'
import styled from 'styled-components'
import ContainerBody from './Container'
import Link from 'next/link'
import FooterMenu from '@/src/components/FooterMenu'
import { footerMenuData } from 'dummy'
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <ContainerBody style={{backgroundColor:"#F6F7F9"}}>
      <TopSection container style={{ margin: "0px" }} columns={{ xs: 12, md: 20 }}>
        <Grid item xs={12} md={10} >
          <LogoContainer>
            <Logo href="./">morent</Logo>
            <LogoDescription>چشم انداز ما ارائه راحتی و کمک به افزایش تجارت شماست.</LogoDescription>
          </LogoContainer>
        </Grid>
        <Grid item xs={12} md={10} >
          <Grid container style={{ margin: "0px" }} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 18 }} >
            {footerMenuData.map((item,index) => {
              return <Grid item xs={2} sm={4} md={6} key={index}>
                <FooterMenu item={item} key={item.id} />
              </Grid>
            })}
          </Grid>
        </Grid>
      </TopSection>
      <BottomSection>
        <BottomSectionRight>
          تمامی حقوق محفوظ می باشد  {new Date().toLocaleDateString('fa-IR', { year: 'numeric' }) + " ©"}
        </BottomSectionRight>
        <BottomSectionLeft>
          <Link href="./">
            سیاست حفظ حریم خصوصی
          </Link>
          <Link href="./">
            شرایط و ضوابط
          </Link>
        </BottomSectionLeft>
      </BottomSection>
    </ContainerBody>
  )
}

export default Footer
const TopSection = styled(Grid)`
padding:48px 0 ;
`

const LogoContainer = styled.div`
display:flex;
flex-direction:column;
gap:1rem;
margin-bottom:48px;
`
const Logo = styled(Link)`
text-decoration: none;
font-size: 30px;
font-weight: 700;
text-transform: uppercase;
color:${props => props.theme.primary};
`
const LogoDescription = styled.span`
max-width:215px;
font-weight: 500;
line-height: 150%;
color:${props => props.theme.text.secondary};
`
// === bottom footer === 
const BottomSection = styled.div`
display:flex;
flex-direction:column;
padding:36px 0;
border-top: 1px solid rgba(19, 19, 19, 0.16);
gap:32px;
@media (min-width:768px){
justify-content:space-between;
flex-direction:row;
}
`
const BottomSectionRight = styled.p`
`
const BottomSectionLeft = styled.div`
display:flex;
align-items:center;
gap:60px;
@media (max-width:768px){
justify-content:space-between;
}
`