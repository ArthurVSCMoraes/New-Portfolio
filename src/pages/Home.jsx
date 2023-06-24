import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import BestProjetcs from '../components/BestProjetcs'
import styled, { keyframes } from 'styled-components'
import BackgroundFirstImage from '../images/layered-waves-haikei.svg.jpg.png'
import Footer from '../components/Footer'
import { ImStack } from "react-icons/im";
export class Home extends Component {
  render() {
    return (
      <>
        <div>
          <MainDiv className="App">
            <NavTopBar>
              <TopBar>
                {/* <button ><Link to="/projects">Projetos</Link></button> */}
                <ButtonNavbar > <IconStyled size={"20px"} className="IconStyled"/> <LinkStyle href='/about'>Sobre min</LinkStyle></ButtonNavbar>
                <ButtonNavbar > <IconStyled size={"20px"} className="IconStyled"/> <LinkStyle href="/projects">Projetos</LinkStyle></ButtonNavbar>
                <ButtonNavbar ><IconStyled size={"20px"} className="IconStyled"/><LinkStyle href="/mail">Envie um e-mail</LinkStyle></ButtonNavbar>
                <LineTopBar />
              </TopBar>
            </NavTopBar>

              {/* <Blend href={BlendImage} alt={'saaa'} size={"200px"}></Blend> */}
            <Main>
              <h1>Arthur Vieira</h1>
              <p>Sou do Rio de Janeiro, tenho  21 anos. Atualmente estudo Análise e desenvolvimento de sistemas na PucMinas e Desenvolvimento FullStack na Trybe</p>
              <p>Front-end Developer</p>
            </Main>

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
const ButtonIconAnimation = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`
const IconStyled = styled(ImStack)`
opacity: 0;
padding: 5px;
&: hover{
  animation: ${ButtonIconAnimation} 0.5s linear forwards;
}
`

const MainDiv = styled.div`
  height: 80vh;
  /* width: 95vw; */
  background-image: url(${BackgroundFirstImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  // color: white;
  mix-blend-mode: screen;
`;

const Main = styled.div`
background: rgba(255, 255, 255, 0.01);
border-radius: 16px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(9.8px);
-webkit-backdrop-filter: blur(9.8px);
max-width: 706px;
min-width: 200px;
display: flex;
flex-direction: column;
padding: 35px;
margin-left: 34px;
margin-top: 69px;
font-size: 20px;
`


const NavTopBar = styled.div`
display: flex;
position: relative;
padding: 5px;
justify-content: flex-end;
`
const TopBar = styled.div`
display: flex;
width: 432px;
justify-content: space-evenly;
`

const ButtonNavbar = styled.button`
background-color: #FFFFFF;
border: 1px solid black;
display: flex;
align-items: center;
justify-content: space-evenly;
min-width: 100px;

border-radius: 5px;
opacity: 0.5;
&:hover .IconStyled {
  animation: ${ButtonIconAnimation} 0.5s linear forwards;
}

}
& :
focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}
& : focus-visible {
  box-shadow: none;
}
`

const LinkStyle = styled.a`
text-decoration: none;
color: black;
padding: 5px
`

const LineTopBar = styled.div`
position: absolute;
  bottom: 0;
  left: 12.5%;
  width: 75%;
  height: 3px;
  background-color: black;
  border-radius: 30px;
`

const LineBot = styled.div`
position: absolute;
bottom: 145px; 
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