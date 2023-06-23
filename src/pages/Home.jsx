import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import BestProjetcs from '../components/BestProjetcs'
import styled from 'styled-components'
import BackgroundFirstImage from '../images/layered-waves-haikei.svg'
import Footer from '../components/Footer'

export class Home extends Component {
  render() {
    return (
      <>
      <div>
        <MainDiv className="App">
        <NavTopBar>
          <TopBar>
          {/* <button ><Link to="/projects">Projetos</Link></button> */}
          <ButtonNavbar ><Link to="/about">Sobre min</Link></ButtonNavbar>
          <ButtonNavbar ><Link to="/projects">Projetos</Link></ButtonNavbar>
          <ButtonNavbar ><Link to="/mail">Envie um e-mail</Link></ButtonNavbar>
          <LineTopBar />
          </TopBar>
        </NavTopBar>
        <div>
          <Main>
            <h1>Arthur Vieira</h1>
            <p>Sou do Rio de Janeiro, tenho  21 anos. Atualmente estudo Análise e desenvolvimento de sistemas na PucMinas e Desenvolvimento FullStack na Trybe</p>
            <p>Front-end Developer</p>
          </Main> 
        </div>
      </MainDiv>
      <BestProjetcsDiv >
        <TitleCentering>
        <ProjetctsTilte>Projetos que mais me orgulho</ProjetctsTilte>
        <LineBot />
        </TitleCentering>
        <BestProjetcs />
      </BestProjetcsDiv>
      <Footer />
      </div>
      </>
    )
  }
}

const MainDiv = styled.div`
height: 100vh;
  width: 100vw;
  background-image: url(${BackgroundFirstImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: white;
`

const Main = styled.div`
/* From https://css.glass */
background: rgba(255, 255, 255, 0.01);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(12.5px);
-webkit-backdrop-filter: blur(12.5px);
`


const NavTopBar = styled.div `
display: flex;
position: relative;
padding: 5px;
justify-content: flex-end;
`
const TopBar = styled.div `
text-decoration: none;
`

const ButtonNavbar = styled.button`
background-color: white;
border: 0px;
&:
hover{
border: 2px solid #bc0000;
}
`

const LineTopBar = styled.div `
position: absolute;
  bottom: 0;
  left: 12.5%;
  width: 75%;
  height: 3px;
  background-color: white;
  border-radius: 30px;
`

const LineBot = styled.div`
position: absolute;
bottom: -55px; 
left: 25%;
width: 50%; 
height: 3px;
background-color: white;
border-radius: 30px;
`

const BestProjetcsDiv = styled.div`
background-color: #bc0000;
padding-bottom: 100px;
color: white;
`

const TitleCentering = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const ProjetctsTilte = styled.h2`
margin-top: 0px;
width: 500px
text-align: center;
color: white;
`
export default Home