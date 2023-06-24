import React from 'react'
import ImagemBackground from './ImagemBackground'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterMainDiv>
        <ImagemBackground />
    </FooterMainDiv>
  )
}

export default Footer

const FooterMainDiv = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 5vh;
background-color: black;
color: white;
`