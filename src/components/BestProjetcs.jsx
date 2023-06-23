import React, { Component, useState } from 'react';
import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
import { TfiClose, TfiNewWindow } from "react-icons/tfi";

export class BestProjetcs extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <BestProjectsDiv>
        <CardProject>
          <h4>Star-wars Context Api</h4>
          <p>Projeto que foi utilizado react e o context api.</p>
          <Button onClick={this.toggleModal}> <TfiNewWindow/> Acesse o Repositório desse projeto</Button>
          {showModal && (
            <ModalContainer>
              <ModalContent>
                <h2>Repositório não disponível</h2>
                <p>O repositório desse projeto não está disponível no momento, mas acesse meu Github e veja demais projetos.</p>
                <ButtonGroup>
                  <ButtonPrimary href="https://github.com/ArthurVSCMoraes" target="_blank">
                    <ButtonContentPrimary >
                    <AiFillGithub />   Ver no GitHub
                    </ButtonContentPrimary>
                  </ButtonPrimary>
                  <ButtonSecondary onClick={this.toggleModal}><ButtonClose><TfiClose /> Fechar</ButtonClose> </ButtonSecondary>
                </ButtonGroup>
              </ModalContent>
            </ModalContainer>
          )}
        </CardProject>
        <CardProject>
          <h4>FrontEnd Online Store</h4>
          <p>Projeto que foi utilizado react e redux para a construção de uma aplicação e sendo consumido a Api do mercado livre para popular e construir um site simulando uma loja</p>
          <Button onClick={this.toggleModal}> <TfiNewWindow/> Acesse o Repositório desse projeto</Button>
          {showModal && (
            <ModalContainer>
              <ModalContent>
                <h2>Repositório não disponível</h2>
                <p>O repositório desse projeto não está disponível no momento, mas acesse meu Github e veja demais projetos.</p>
                <ButtonGroup>
                  <ButtonPrimary href="https://github.com/ArthurVSCMoraes" target="_blank">
                    <ButtonContentPrimary >
                    <AiFillGithub />   Ver no GitHub
                    </ButtonContentPrimary>
                  </ButtonPrimary>
                  <ButtonSecondary onClick={this.toggleModal}><ButtonClose><TfiClose /> Fechar</ButtonClose> </ButtonSecondary>
                </ButtonGroup>
              </ModalContent>
            </ModalContainer>
          )}
        </CardProject>
        <CardProject>
          <h4>Star-wars Context Api</h4>
          <p>Projeto que foi utilizado react e o context api.</p>
          <Button onClick={this.toggleModal}> <TfiNewWindow/> Acesse o Repositório desse projeto</Button>
          {showModal && (
            <ModalContainer>
              <ModalContent>
                <h2>Repositório não disponível</h2>
                <p>O repositório desse projeto não está disponível no momento, mas acesse meu Github e veja demais projetos.</p>
                <ButtonGroup>
                  <ButtonPrimary href="https://github.com/ArthurVSCMoraes" target="_blank">
                    <ButtonContentPrimary >
                    <AiFillGithub />   Ver no GitHub
                    </ButtonContentPrimary>
                  </ButtonPrimary>
                  <ButtonSecondary onClick={this.toggleModal}><ButtonClose><TfiClose /> Fechar</ButtonClose> </ButtonSecondary>
                </ButtonGroup>
              </ModalContent>
            </ModalContainer>
          )}
        </CardProject>
        
      </BestProjectsDiv>
    );
  }
}

const BestProjectsDiv = styled.div`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
`;

const CardProject = styled.div`
  background-color: black;
  color: white;
  width: 300px;
  text-align: center;
  border-radius: 19px;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;

const Button = styled.button`
  background-color: #bc0000;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
  
`;

const ButtonSecondary = styled.a`
background-color: #bc0000;
color: white;
border: none;
padding: 10px 20px;
margin-top: 10px;
text-decoration: none;
cursor: pointer;
`

const ButtonPrimary = styled.a`
  background-color: #bc0000;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
`;
const ButtonClose = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 68px;
`;
const ButtonContentPrimary = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 122px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  color: black;
`;

export default BestProjetcs;
