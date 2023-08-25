import React, { useEffect, useState } from 'react'
import { styled,keyframes} from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Tape from './Tape';


const Container = styled.div`
  position: relative;
  width: 60vw;
  height: 55vh;
  box-shadow: 5px 5px 10px #999;
  border-radius: 8px;
  cursor : pointer ;
  transition : 0.3s;
  &:hover{
    div{
      transition : 0.5s;
      scale : 1.1;
    }
  }
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 55vh;
  transition: opacity 0.8s ease;
  border-radius: 8px;
  opacity: ${({ isCurrent }) => (isCurrent ? 1 : 0)};
`;


const ProjectSlider = ({images}) => {
const navigate = useNavigate();


const [currentImgIndex, setCurrentImgIndex] = useState(0)

const nextSlide = () => {
  setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
};

useEffect(() => {
  const sliderInterval = setInterval(nextSlide, 2500)

  return () => {
    clearInterval(sliderInterval)
  };
}, [images])


  return (
    <Container onClick={() => navigate("/project")}>
      <Tape text={"Project"} />
      {images.map((image, index) => (
        <Image key={index} src={image} isCurrent={index === currentImgIndex} />
      ))}
    </Container>
  )
}

export default ProjectSlider
