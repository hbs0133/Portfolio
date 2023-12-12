import React,{useState} from 'react'
import { styled,keyframes } from 'styled-components'
import Modal from './Modal'
import tape from '../Img/tape2.png'

const TapeAni = keyframes`
  from {
    opacity : 0.9;
    transform: translateX(-15px);
  }
  to {
    opacity : 1;
    transform: translateX(0);
  }
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap : 10px;
  cursor: pointer;
  position: relative;
  &:hover{
    div:first-child{
      div{
        animation: ${TapeAni} 1s ease-in-out ;
      }
    }
  }
` 


const Tape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-image: url(${tape});
  background-size: cover;
  width : 180px;
  height : 60px;
  rotate: -45deg;
  top : 0px;
  left : -75px;
  font-size : 30px;
  font-weight : bold;
  font-family: 'MYYeongnamnu';
`
const Img = styled.div`
  position: relative;
  img{
    width : 300px;
    height : 40vh;
    object-fit: inherit;
    border-radius: 8px;
    box-shadow: 5px 5px 5px #888;
  }
`
const Title = styled.div`
  margin-top : 5px;
  font-size : 22px;
  font-weight : bold;
`

const Date =styled.div`

`
const Stack = styled.div`
  font-size : 16px;
`
const ProjectItem = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const ModalHandler = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
    <Container onClick={ModalHandler}>
      <Img>
      <img src={item.img} />
      <Tape >{item.tag}</Tape>
      </Img>
      <Title>{item.title}</Title>
      <Date>{item.date}</Date>
      <Stack>{item.stack}</Stack>
    </Container>
    <Modal isOpen={isModalOpen} ModalHandler={ModalHandler} item={item} />
    </>
  )
}

export default ProjectItem
