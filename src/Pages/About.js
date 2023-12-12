import React from 'react'
import { styled,keyframes } from 'styled-components'
import Logo from '../Components/Logo'
import Gnb from '../Components/Gnb'
import Accordion from '../Components/Accordion'
import tape from '../Img/tape2.png'
import profile from '../Img/profile.jpeg'

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
  gap : 50px;
  height : 100%;
`
const AboutMeBox = styled.div`
  display: flex; 
  gap : 50px;
  background : #eee;
  padding : 80px 50px;
  border : 2px solid #999;
  border-radius : 8px;
  position: relative;
  box-shadow: 2px 2px 5px #999;
  @media (max-width : 1000px){
    flex-direction: column;
    align-items: center;
  }
  @media (max-width : 699px){
    padding : 50px 20px;
    gap : 30px;
  }
`


const AboutMeImg = styled.img`
    border-radius : 8px;
    width : 300px;
    @media (max-width : 699px){
      width : 270px;
    }
`
const AboutMeText = styled.div`
  font-weight : 600;
  display : flex;
  flex-direction: column;
  gap : 40px;
  @media (max-width : 699px){
    font-size : 15px;
  }
`

const AboutMeSlogan = styled.h1`
  font-size : 26px;
  @media (max-width : 699px){
    font-size : 21px;
    font-weight : bold;
  }
`

const AboutUl = styled.ul`
  display : flex;
  flex-direction: column;
  gap : 10px;
`
const AboutDownloadButton = styled.button`
  text-decoration: none;
  color : #000;
  border  : 2px solid #777;
  border-radius : 8px;
  padding : 20px 0;
  font-weight: bold;
  font-size : 18px;
  transition: 0.3s;
  font-family: 'Pretendard-Regular';
  &:hover {
    background-color: #000;
    color : #fff;
  }
  @media (max-width : 699px){
    display : none;
  }
}
`

const SkillsBox = styled.div`
  margin : 50px 0;
  position: relative;
  box-shadow: 2px 2px 5px #999;
`

const Tape = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-image: url(${tape});
  background-size: cover;
  width : 200px;
  height : 60px;
  rotate: -45deg;
  top : 0px;
  left : -100px;
  font-size : 30px;
  font-weight : bold;
  font-family: 'MYYeongnamnu';
  animation: ${TapeAni} 1.3s ease-in-out ;
  @media (max-width : 699px){
    width : 120px;
    font-size : 20px;
    top : -30px;
    left : -45px;
  }
`


const About = () => {

  const handleDownload = () => {
    const resumePath = process.env.PUBLIC_URL + '/resume.docx';
    const link = document.createElement('a');
    link.href = resumePath;
    link.target = '_blank';
    link.download = 'resume.docx';
    link.click();
  };

  return (
    <>
    <Gnb />
    <Container>
      <Logo />
      <AboutMeBox>
        <Tape>AboutMe</Tape>
        <AboutMeImg src={profile} />
        <AboutMeText>
          <AboutMeSlogan>" 나는 가치를 개발한다 "</AboutMeSlogan>
          안녕하세요 가치를 개발하고 싶은 개발자 황병선입니다. <br />
          <AboutUl>
            <li>이름 : 황병선</li>
            <li>생년월일 : 98.10.07</li>
            <li>교육사항 : <br />
              2023.02 - 2023.08	웹퍼블리셔&리엑트(React)활용 <br />
                프론트엔드 웹 SW개발자 과정 수료<br />
                2020.03 - 2022.03	부산경상대학교 패션디자인과 졸업<br />
                2017.03 - 2017.10	조선대학교 물리학과 중퇴<br />
            </li>
          </AboutUl>
          <AboutDownloadButton onClick={handleDownload} >이력서 다운로드</AboutDownloadButton>
        </AboutMeText>
      </AboutMeBox> 
      <SkillsBox>
        <Tape>Skills</Tape>
        <Accordion logoUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"} header={"HTML"} content={"HTML을 사용하여 웹 개발을 진행하여 시멘틱 태그의 활용을 통해 웹 페이지의 구조를 명확하게 정의하고, 코드의 가독성을 향상시킬 수 있습니다."}/>
        <Accordion logoUrl={"https://blog.kakaocdn.net/dn/da9XH7/btqTtqEtQyh/n9Wt8iAKzE0FCaSm4c20T1/img.png"} header={"CSS & SASS"} content={"CSS와 SCSS를 사용하여 웹 디자인 및 스타일링을 지원할 수 있습니다. 이를 통해 웹 페이지의 시각적 디자인을 개선하고 스타일 시트를 효율적으로 작성할 수 있습니다."}/>
        <Accordion logoUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1280px-Unofficial_JavaScript_logo_2.svg.png"} header={"JavaScript"} content={"JavaScript를 활용하여 웹 개발을 지원할 수 있습니다. 이를 통해 웹 페이지에 동적 기능을 추가하고 사용자와의 상호작용을 개선할 수 있습니다."}/>
        <Accordion logoUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/220px-Typescript.svg.png"} header={"TypeScript"} content={"Type script를 사용하여 웹 개발을 지원할 수 있으며, 간단한 타입 정의를 통해 코드의 안정성을 향상시킬 수 있습니다."}/>
        <Accordion logoUrl={"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1920px-React-icon.svg.png"} header={"React"} content={"React를 활용하여 웹 애플리케이션 개발을 지원할 수 있으며, 컴포넌트 기반의 구조를 활용하여 웹 앱을 구축하고 사용자 경험을 향상시킬 수 있습니다"}/>
      </SkillsBox>
    </Container>
    </>
  )
}

export default About
