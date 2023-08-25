import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Project from "./Pages/Project";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Loading from "./Pages/Loading";
import './App.css'
import { styled } from "styled-components";
import { createGlobalStyle } from "styled-components";

// 배경 이미지
import bgImg from './Img/bg/2.jpg'

//이미지
import rafSimoms from './Img/rafsimons.png'
import netflix from './Img/netflix.png'
import diary from './Img/diary.png'
import todoList from './Img/todolist.png'


const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration : none;
  }
  * {
    box-sizing : border-box;
  }
`


const Wrap = styled.div`
  font-family: 'Pretendard-Regular';
  width : 100vw;
  height : 100%;
  background-image: url(${bgImg});
  background-size: cover;
  // background-position: center;
  background-repeat: no-repeat;
`

function App() {


  const images = [
    rafSimoms,
    netflix,
    diary,
    todoList,
  ];


  return (
    <>
    <GlobalStyle />
    <Wrap>
      <Routes>
        <Route path="/" element={<Loading />}></Route>
        <Route path="/home" element={<Home images={images} />}></Route>
        <Route path="/project" element={<Project images={images} />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Wrap>
    </>
  );
} 

export default App;
