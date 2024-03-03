import React from 'react';
import styled from 'styled-components';
import ExitButton from './ExitButton';

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index : 1;
`;

const OverLay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const ModalContent = styled.div`
  display : flex;
  height : 95vh;
  flex-direction: column;
  position: relative;
  padding : 60px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  z-index : 9999;
  gap : 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width : 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background: #888; /* 스크롤바의 색상 */
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);  /*스크롤바 뒷 배경 색상*/
  }
  @media (max-width : 699px){
    width : 340px;
    padding : 30px 20px;
  }
`;

const ExitButtonBox = styled.div`
  position: absolute;
  top : 20px;
  right : 30px;
`  

const Img = styled.div`
  height : 40vh;
  img{
    width : inherit;
    height : inherit;
  }
  @media (max-width : 699px){
    margin-top : 50px;
    width : 300px;
    height : 250px;
  }
`

const ProjectInfo = styled.div`
  display : flex;
  flex-direction: column;
  gap : 12px;
  @media (max-width : 699px){
    gap : 5px;
  }
`
const Tag = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top : 50px;
  padding-top : 20px;
  border-top : 2px solid #000;
  @media (max-width : 699px){
    margin-top : 0;
  }

` 
const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  @media (max-width : 699px){
    font-size : 25px;
  }
`
const Date = styled.div`
  font-weight: bold;
`
const Responsive = styled.div`
  font-weight: bold;
`
const Stack = styled.div`
  font-weight: bold;

`
const Link = styled.div`
  margin-top : 30px;
  a{
    text-decoration: none;
    color : #000;
    border  : 2px solid #000;
    border-radius : 8px;
    padding : 20px;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
      background-color: #000;
      color : #fff;
    }
  }
`
const Info = styled.div`
  margin-top : 50px;
  border-top : 2px solid #000;
  padding : 20px;
`

const Modal = ({ isOpen, ModalHandler, item}) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <OverLay onClick={ModalHandler} />
      <ModalContent>
      <ExitButtonBox onClick={ModalHandler}><ExitButton /></ExitButtonBox>
        <Img>
          <img src={item.img} />
        </Img>
        <ProjectInfo>
          <Tag>Hwang</Tag>
          <Title>{item.title}</Title>
          <Date>{item.date}</Date>
          <Responsive>{item.responsive ? "반응형" : "적응형"}</Responsive>
          <Stack>사용기술 :  {item.stack}</Stack>
          <Link><a href={item.address} target='black'>페이지 바로가기</a></Link>
          <Info>{item.info}</Info>
        </ProjectInfo>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;