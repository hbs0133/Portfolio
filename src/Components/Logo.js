import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
  margin : 30px 0;
  svg{
    cursor : pointer;
    width : 450px;
    height : 350px;
    transition: 0.3s;
    &:hover {
      scale : 1.05;
    }
  }
`
const Logo = () => {
  const navigate = useNavigate();
  return (
    <Wrap onClick={() => navigate("/home")}>
      <svg width="367" height="422" viewBox="0 0 367 422" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Frame5">
          <rect width="367" height="422" fill="none" />
          <path id="Line3" d="M189.315 29L86 405.067" stroke="black" strokeWidth="13" strokeLinecap="round" />
          <path id="Line4" d="M335.315 13L232 389.067" stroke="black" strokeWidth="13" strokeLinecap="round" />
          <path id="Line5" d="M22 285L350 261" stroke="black" strokeWidth="13" strokeLinecap="round" />
          <text id="Hwang" fill="black" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Brush Script MT" fontSize="30" fontStyle="italic" letterSpacing="0em">
            <tspan x="127" y="394.762">Hwang</tspan>
          </text>
        </g>
      </svg>
    </Wrap>
  )
}

export default Logo
