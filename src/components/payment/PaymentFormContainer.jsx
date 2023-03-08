import styled from 'styled-components'
import CardContainer from '../CardContaienr'

const PaymentFormContainer = (props) => {
    const { activeStep = 1, totalStep = 4, title, subTitle, children } = props
    return (
            <CardContainer>
                {/* === Header === */}
                <Header>
                    <div>
                        <Title>{title}</Title>
                        <SubTittle>{subTitle}</SubTittle>
                    </div>
                    <StepContainer>
                        مرحله {activeStep} از {totalStep}
                    </StepContainer>
                </Header>
                {/* === children === */}
                {children}
            </CardContainer>
    )
}

export default PaymentFormContainer


const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 24px;
`
const Title = styled.h2`
margin-bottom: 6px;
font-size:16px;
@media (min-width:768px) {
    font-size:20px;
}
`
const SubTittle = styled.p`
font-weight: 500;
font-size: 12px;
line-height: 15px;
color:${props => props.theme.text.secondary};
`
const StepContainer = styled.p`
font-weight: 500;
font-size: 12px;
line-height: 15px;
color:${props => props.theme.text.secondary};
`