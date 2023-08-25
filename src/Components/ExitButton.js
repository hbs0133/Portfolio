import React from 'react'
import { styled, keyframes } from 'styled-components'


const Container = styled.div`

`
const Svg = styled.svg`
  width : 30px;
  &:hover {
    path{
      transition: 0.3s;
    }
    path:nth-child(2){
      transform: translateY(-10px) translateX(0px) rotateZ(15deg);
      transform-origin: bottom;
    }
    path:nth-child(3){
      transform: translateY(10px) translateX(90px)  rotateZ(-45deg);
      transform-origin: bottom;
    }
    path:nth-child(4){
      opacity:0;
    }
  }
`;
const Line = styled.path`
  stroke-width: 30;
  stroke-linecap: round;
`;
const Line1 = styled(Line)`

`;
const Line2 = styled(Line)`

`;
const Line3 = styled(Line)`

`;

const ExitButton = () => {
  return (
    <Container>
      <Svg width="30" height="50" viewBox="0 0 367 422" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame5">
        <rect width="367" height="422" fill="transparent" />
        <Line1 d="M189.315 29L86 405.067" stroke="#000" />
        <Line2 d="M335.315 13L232 389.067" stroke="#000" />
        <Line3 d="M22 285L350 261" stroke="#000" />
      </g>
    </Svg>
    </Container>
  )
}

export default ExitButton
