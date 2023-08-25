import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import Logo from '../Components/Logo'
import ProjectSlider from '../Components/ProjectSlider'
import ProjectItem from '../Components/ProjectItem'
import Gnb from '../Components/Gnb'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap : 50px;
  height: 100%;
  padding-bottom : 100px;
`
const ProjectBox = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap : 50px 70px;
  height : 70vh;
  margin-top : 50px;
  margin-bottom : 100px;
`
const SearchBar = styled.div`
  margin-top : 60px;
  width : 65vw;
  border-bottom : 3px solid #000;
  input {
    width : 100%;
    background: transparent;
    border: none;
    padding : 20px;
    font-size: 20px;
    font-family: 'Pretendard-Regular';
    &::placeholder{
      color : #666;
    }
    &:focus{
      outline:none
    }
    &:focus::placeholder{
      opacity: 0;
    }
  }

`


const Project = ({images}) => {
  const [projectList,setProjectList] = useState([]);
  const [search, setSearch] = useState("")

  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/hbs0133/Portfolio_DB/projects`
    let response = await fetch(url);
    let data = await response.json();
    setProjectList(data)
  }
  useEffect(()=> {
    getProduct();
  },[])
  

  const onChangeSearch = (e) => {
    setSearch(e.target.value)
  }

  const getSearchResult = () => {
    return search === "" ? projectList :projectList.filter((it) => it.keyWord.toLowerCase().includes(search.toLowerCase()))
  }
  console.log(projectList.map((it) => it.keyWord));
  return (
    <>
    <Container>
      <Logo />
      <Gnb />
      <ProjectSlider images={images} />
      <SearchBar>
        <input type='text' onChange={onChangeSearch} value={search} placeholder='검색하고 싶은 기술을 입력하세요' />
      </SearchBar>
      <ProjectBox>
        {getSearchResult().map((item)=> (
          <ProjectItem item={item}/>
        ))}
      </ProjectBox>
    </Container>
    </>
  )
}

export default Project


// projectList : projectList.filter((it) => it.stack.toLowerCase().includes(search.toLowerCase()))