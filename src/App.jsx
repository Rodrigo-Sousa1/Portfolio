import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './components/inicio.jsx'
import Sobre from './components/sobre.jsx'
import Portfolio from './components/portfolio.jsx'
import Logo from './assets/Designer.jpeg'
import Github from './assets/github.png'
import Linkedin from './assets/linkedin.png'


const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

`
const NavBar = styled.nav`
    height:120px;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    background-color:#00010D;
    flex-direction:column ;
   
`
// Display hambuguer
const Lista = styled.ul`
    width:40%;
    height:40%;
    display:flex;
    justify-content:flex-start;
    justify-content: space-evenly;
    @media screen and (max-width:360px){
   display:none; 
} 
`

const Botao = styled.button`
display:none;
@media screen and (max-width:360px){
  display:flex;
}
`

  
const Linha = styled.li`
    width:90px;
    list-style:none;
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    font-size:20px;
  `
const Li = styled(Link)`
    list-style:none;
    text-decoration:none;
    color:white;
    &:hover {
        color:green;
        transform: scale(1.12)}
  `
const Logo1 = styled.img`
    width:50px;
    height:50px;
    margin-left:10px;
    margin-top:10px ;
    border-radius:50px;
    border: solid green;
`
const Secao1 = styled.section`
    width:100%;
    display:flex;
    justify-content:space-between;
`
const Social = styled.img`
    width:35px;
    height:35px;
    border-radius: 20px;
    
`
const Div = styled.div`
    width:13%;
    display:flex;
    justify-content:space-evenly;

    
`

function App() {
  const [count, setCount] = useState(0)

  const [open, useOpen] = useState(false)

  const Mudar = ()=>{
    if(open === false ){useOpen(true)}
    else {useOpen(false)}
  }

  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <NavBar>
      <Botao onClick={Mudar}>☰</Botao>
    
      {open &&<Lista>
            <Linha>
              <Li to="/" >Inicio</Li>
            </Linha>
            <Linha>
              <Li to="sobre">Sobre</Li>
            </Linha>
            <Linha>
              <Li to="portfolio">Portfolio</Li>
            </Linha>
      </Lista>}
      
          <Secao1>
            <Logo1 src={Logo} alt="" />
            <Div>
              <a href="https://github.com/Rodrigo-Sousa1" target='blank'>
                <Social src={Github} alt="" /> </a>
              <a href="https://www.linkedin.com/in/rodrigo-sousa-b531191bb/" target='blank'>
                <Social src={Linkedin} alt="" /> </a>
            </Div>
          </Secao1>
          <Lista>
            <Linha>
              <Li to="/" >Inicio</Li>
            </Linha>
            <Linha>
              <Li to="sobre">Sobre</Li>
            </Linha>
            <Linha>
              <Li to="portfolio">Portfolio</Li>
            </Linha>
          </Lista>
        </NavBar>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
