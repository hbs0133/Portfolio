import React from 'react'
import { styled } from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: right;
  align-items: center;
  gap : 120px;
  padding : 20px 30px;
  margin-right : 20px;
  // &::before{
  //   content : "";
  //   width : 1px;
  //   height : 120px;
  //   position: absolute;
  //   border-left: 4px solid #000;
  //   left : -4px;
  // }
  // &::after{
  //   content : "";
  //   width : 1px;
  //   height : 120px;
  //   position: absolute;
  //   border-left: 4px solid #000;
  //   right : -5px;
  // }
  @media (max-width : 800px){
    gap : 50px;
  }
`

const Link = styled.div`
  cursor : pointer;
  font-weight: bold;
  font-size : 24px;
  transition: 0.3s;
  text-shadow: 3px 3px 1px #bbb;
  padding-bottom : 10px;
  font-family: 'MYYeongnamnu';
  &:hover{
    color : gray;
  }
`


const Gnb = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <Link onClick={() => navigate("/project")} >Project</Link>
      <Link onClick={() => navigate("/about")}>About</Link>
      <Link onClick={() => navigate("/contact")}>Contact</Link>
    </Container>
  )
}

export default Gnb
