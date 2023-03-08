import styled from "styled-components"

const CardContainer = (props) => {
    const { children, style } = props
    return (
        <Wrapper style={style ? style : {}}>
            {children}
        </Wrapper>
    )
}
export default CardContainer
const Wrapper = styled.div`
padding:16px;
transition: all .3s ease;
&:hover{
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
background-color:${props => props.theme.bgWhite};
border-radius: 10px;
@media (min-width:768px) {
    padding:24px;
}
`