import React from 'react'
import { styled,keyframes } from 'styled-components'
import tape from '../Img/tape.png'

const TapeAni = keyframes`
  from {
    opacity : 0;
    transform: translateX(-100px);
  }
  to {
    opacity : 1;
    transform: translateX(0);
  }
`;


const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left : -130px;
  background-image: url(${tape});
  background-size: cover;
  width : 280px;
  height : 80px;
  rotate: -45deg;
  z-index : 1;
  font-size : 48px;
  font-weight : bold;
  font-family: 'MYYeongnamnu';
  animation: ${TapeAni} 1.3s ease-in-out ;
  @media (max-width : 800px) {
    width : 200px;
    left : -100px;
    font-size : 40px;
  }
  @media (max-width : 768px) {
    width : 150px;
    left : -80px;
    font-size : 25px;
  }
  @media (max-width : 481px) {
    width : 120px;
    left : -60px;
    top : -30px;
    font-size : 20px;
  }
`

const Tape = ({text}) => {
  return (
    <Wrap>
        {text}
    </Wrap>
  )
}

export default Tape
