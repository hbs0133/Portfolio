import React, { useCallback, useRef, useState } from 'react'
import { styled } from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width : 25vw;
  border-radius: 4px;
  border: 1px solid #999;
  background-color : #eee;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 32px;
  justify-content: space-between;
  margin: 0 10px;
  padding : 40px 0;
  font-weight : bold;
  font-size : 18px;
  img{
    width : 50px;
    margin-left : 20px;
  }
`
const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap : 20px;
`

const Button = styled.div`
  font-size: 14px;
  margin-right : 20px;
`
const ContentsWrapper = styled.div`
  height: 0;
  width: calc(inherit - 1px);
  overflow: hidden;
  transition: height 0.35s ease, background 0.35s ease;
`

const Contents = styled.div`
  padding: 30px;
  background-color : #fff;
  border: 1px solid #999;
  border-right : none;
  border-left : none;
`

const Accordion = ({header, content, logoUrl}) => {
  const parentRef = useRef(null);
  const childRef = useRef(null);
  const [isCollapse, setIsCollapse] = useState(false);

  const handleButtonClick = useCallback(
    (event) => {
      event.stopPropagation();
      if (parentRef.current === null || childRef.current === null) {
        return;
      }
      if (parentRef.current.clientHeight > 0) {
        parentRef.current.style.height = "0";
        parentRef.current.style.background = "white";
      } else {
        parentRef.current.style.height = `${childRef.current.clientHeight}px`;
        parentRef.current.style.background = "lightgray";
      }
      setIsCollapse(!isCollapse);
    },
    [isCollapse]
  );

  const parentRefHeight = parentRef.current?.style.height ?? "0px";
  const buttonText = parentRefHeight === "0px" ? "열기" : "닫기";

  return (
    <Container>
      <Header onClick={handleButtonClick}>
        <HeaderContents>
        <img src={logoUrl} />
        {header}
        </HeaderContents>
        <Button>{buttonText}</Button>
      </Header>
      <ContentsWrapper ref={parentRef}>
        <Contents ref={childRef} >{content}</Contents>
      </ContentsWrapper>
    </Container>
  )
}

export default Accordion
