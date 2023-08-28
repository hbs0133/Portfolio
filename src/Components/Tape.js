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
  width : 14vw;
  height : 80px;
  rotate: -45deg;
  z-index : 1;
  font-size : 2.5vw;
  font-weight : bold;
  font-family: 'MYYeongnamnu';
  animation: ${TapeAni} 1.3s ease-in-out ;
`

const Tape = ({text}) => {
  return (
    <Wrap>
        {text}
    </Wrap>
  )
}

export default Tape
