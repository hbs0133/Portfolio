import React,{ useRef } from 'react'
import { styled, keyframes } from 'styled-components'
import Logo from '../Components/Logo'
import Gnb from '../Components/Gnb'
import emailjs from '@emailjs/browser'
import tape from '../Img/tape2.png'

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



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap : 100px;
  height : 100%;
  padding-bottom : 100px;
`
const ContactBox = styled.div`
  border : 2px solid #999;
  background : #eee;
  box-shadow: 2px 2px 5px #999;
  border-radius : 8px;
  padding : 60px 90px;
  position: relative;
  @media (max-width : 699px){
    padding : 40px 70px;
  }
  ul{
    display : flex;
    flex-direction: column;
    gap : 20px;
    font-size : 18px;
    font-weight : bold;
    @media (max-width : 699px){
      font-size : 15px;
    }
  }
`

const MailForm = styled.form`
  display : flex;
  flex-direction: column;
  width : 550px;
  padding : 20px 0;
  gap : 10px;
  position: relative;
  padding : 30px 60px;
  border : 2px solid #999;
  background : #eee;
  box-shadow: 2px 2px 5px #999;
  border-radius : 8px;
  @media (max-width : 699px){
    width : 350px;
  }

`
const MailLabel = styled.label`
  font-family: 'MYYeongnamnu';
  font-weight: 500;
  font-size: 24px;
`
const MailInput = styled.input`
  border : none;
  border-bottom : 2px solid #000;
  background: transparent;
  font-size : 16px;
  &:focus{
    outline: none;
  }
  &::placeholder{
    font-family: 'Pretendard-Regular';
    font-size : 16px;
  }
  &:focus::placeholder{
    opacity : 0;
  }
`
const MailTextArea = styled.textarea`
  background: #fff;
  resize: none;
  width : 100%;
  height: 200px;
  padding : 10px;
  font-size: 16px;
  &:focus{
    outline: none;
  }
  &::placeholder{
    font-family: 'Pretendard-Regular';
    font-size : 16px;
  }
  &:focus::placeholder{
    opacity : 0;
  }
`
const MailSendInput = styled.input`
  border : none;
  background: transparent;
  cursor : pointer;
  font-size: 38px;
  font-weight: 500;
  font-family: 'MYYeongnamnu';
  transition: 0.3s;
  &:hover{
    color : gray;
  }
  &:focus::placeholder{
    opacity : 0;
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
  top : -20px;
  left : -80px;
  font-size : 30px;
  font-weight : bold;
  font-family: 'MYYeongnamnu';
  animation: ${TapeAni} 1.3s ease-in-out ;
  @media (max-width : 699px){
    top: -20px;
    left : -60px;
    width : 120px;
    font-size : 25px;
  }
`


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s6psff6', 'template_qo2q6u8', form.current, 'IShhZdiCcxiV63Ye8')
      .then((result) => {
          alert("메일이 성공적으로 발송되었습니다! 이메일에 회신이 도착했는지 꼭 확인해주세요!")
      }, (error) => {
          alert("메일이 성공적으로 발송되지않았습니다 정보를 다시한번 확인해주세요!")
      });
  };

  return (
  <>
    <Gnb />
    <Container>
      <Logo />
      <ContactBox>
      <Tape>Contact</Tape>
        <ul>
          <li>연락처 : 010-2349-0133</li>
          <li>이메일 : hbs0133@naver.com</li>
          <li>SNS : @h.b.sun_</li>
        </ul>
      </ContactBox>
      <MailForm ref={form} onSubmit={sendEmail}>
        <Tape>Mail</Tape>
        <MailLabel>Name</MailLabel>
        <MailInput type="text" placeholder="이름을 입력해주세요" name="from_name" />
        <MailLabel>Email</MailLabel>
        <MailInput type="email" placeholder="이메일을 입력해주세요" name="from_email" />
        <MailLabel>Message</MailLabel>
        <MailTextArea name="message" placeholder="메시지을 입력해주세요" />
        <MailSendInput type="submit" value="Send" />
    </MailForm>
    </Container>
  </>
  )
}

export default Contact
