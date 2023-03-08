import React from 'react'
import styled from 'styled-components';

const Loading = () => {
    return (
        // <Wrapper>
        //     <LoadingContainer>
        //         <div className="loading-item1"></div>
        //         <div className="loading-item2"></div>
        //         <div className="loading-item3"></div>
        //         <div className="loading-item4"></div>
        //     </LoadingContainer>
        // </Wrapper>
        <Wrapper>
            <LoadingContainer>
                <div className="loading-item1"></div>
                <div className="loading-item2"></div>
                <div className="loading-item3"></div>
                <div className="loading-item4"></div>
            </LoadingContainer>
            <ul >
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </Wrapper>
    )
}

export default Loading
// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100vh;
//   background: radial-gradient(circle, rgba(58,58,64,1) 0%, rgba(45,45,50,1) 100%);
//   position: fixed;
//   inset: 0;
//   z-index: 999;
// `;
const LoadingContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  & .loading-item1,
  & .loading-item2,
  & .loading-item3,
  & .loading-item4 {
    width: 3px;
    background-color: ${(props) => props.theme.bgWhite};
    animation: loading 1.2s infinite ease-in-out;
  }
  & .loading-item1 {
    animation-delay: -0.3s;
  }
  & .loading-item2 {
    animation-delay: -0.2s;
  }
  & .loading-item3 {
    animation-delay: -0.1s;
  }
  & .loading-item4 {
    animation-delay: -0s;
  }
  @keyframes loading {
    0% {
      height: 10px;
    }
    50% {
      height: 100%;
    }
    100% {
      height: 10px;
    }
  }
`;
const Wrapper = styled.div`
  position: fixed;
 inset: 0;
 z-index: 99999;
 display: flex;
  justify-content: center;
   align-items: center;
   /* background: #4e54c8;   */
   background: ${props => props.theme.primary};  
    background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);  
    width: 100%;
    height:100vh;
    ul{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    }
    li{
        position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
    }
    li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}
li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}
 li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}
li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
@keyframes animate {

0%{
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
}

100%{
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
}

}

`