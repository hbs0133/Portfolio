import React from 'react'
import { styled,keyframes } from 'styled-components'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const drawLine = keyframes`
  0% { stroke-dashoffset: 1000; }
  100% { stroke-dashoffset: 0; }
`;
const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
const Scale = keyframes`
  0% { scale: 1;  }
  100% { scale : 2.5; }
`
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  animation: ${Scale} 3s 3s ease-out forwards;
`
const Svg = styled.svg`
  width: 367px;
  height: 422px;
`;
const Line = styled.path`
  stroke-width: 10;
  stroke-linecap: round;
`;
const Line1 = styled(Line)`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${drawLine} 3s ease-out forwards;
`;
const Line2 = styled(Line)`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${drawLine} 3s 1s ease-out forwards;
`;
const Line3 = styled(Line)`
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${drawLine} 3s 2s ease-out forwards;
`;
const Text = styled.text`
  opacity: 0;
  animation: ${fadeIn} 1s 3s forwards;
  font-family: 'MYYeongnamnu';
`;


const Loading = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    const goToHome = () => {
      navigate('/home')
    };

    const timer = setTimeout(goToHome, 5500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <Container>
      <Svg width="367" height="422" viewBox="0 0 367 422" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Frame5">
        <rect width="367" height="422" fill="transparent" />
        <Line1 d="M189.315 29L86 405.067" stroke="black" />
        <Line2 d="M335.315 13L232 389.067" stroke="black" />
        <Line3 d="M22 285L350 261" stroke="black" />
        <Text id="Hwang" fill="black" xmlSpace="preserve" fontSize="30" fontStyle="italic" letterSpacing="0em">
          <tspan x="127" y="394.762">Hwang</tspan>
        </Text>
      </g>
    </Svg>
    </Container>
  )
}

export default Loading
