import React from 'react'
import Logo from '../Components/Logo'
import { styled } from 'styled-components'
import ProjectSlider from '../Components/ProjectSlider'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import Tape from '../Components/Tape'

import resume from '../Img/이력서.png'
import profile from '../Img/profile.jpeg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap : 100px;
  height : 100%;
`
const LinkBox = styled.div`
  display: flex;
  width : 55vw;
  justify-content: space-between;
  align-items: center;
  font-size : 60px;
  gap : 200px;
  @media (max-width : 1801px){
    flex-direction: column;
    gap : 0px;
  }
`
const About = styled.div`
  position: relative;
  cursor: pointer;
  rotate : 10deg;
  margin-bottom : 100px;
  border-radius: 8px;
  transition : 0.5s;
  &:hover{
    rotate : 0deg;
    div{
      transition : 0.5s;
      scale : 1.1;
    }
  }
  img{
    width : 300px;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #999;
    @media (max-width : 767px) {
      width : 200px;
    }
  }
`
const Contact = styled.div`
  position: relative;
  cursor: pointer;
  rotate : -5deg;
  margin-bottom : 100px;
  transition : 0.5s;
  &:hover{
    rotate : 0deg;
    div{
      transition : 0.5s;
      scale : 1.1;
    }
  }
  img{
    box-shadow: 5px 5px 10px #999;
    border-radius: 8px;
    width : 600px;
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      width : 500px;
    }
    @media (max-width : 767px) {
      width : 300px;
    }
  }
`

const Home = ({images}) => {
  const navigate = useNavigate()
  return (
    <Container>
      <Logo />
      <ProjectSlider images={images} />
      <LinkBox>
        <About onClick={() => navigate("/about")}>
          <Tape text={"About"}/>
          <img src={profile} />
        </About>
        <Contact onClick={() => navigate("/contact")}>
          <Tape text={"Contact"}/>
          <img src={resume} />
        </Contact>
      </LinkBox>
    </Container>
  )
}

export default Home