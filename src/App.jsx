import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './components/inicio.jsx'
import Sobre from './components/sobre.jsx'
import Portfolio from './components/portfolio.jsx'
import Contato from './components/contato.jsx'
import Logo from './assets/Designer.jpeg'



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
@media screen and (max-width:360px){
    height:90px;
}
   
`
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
// Display hambuguer

const Botao = styled.button`
    display:none;
 @media screen and (max-width:360px){
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    width:40px;
    font-size:20px;
    background-color:green;
    color:white;
    margin:5px;
}
 `

const ListaResponsiva = styled.ul`
   display:none;
@media screen and (max-width:360px){
  display:flex;
  flex-direction:column;
  width:60%;
} `
const DivResponsivo = styled.div`
  display:none;
@media screen and (max-width:360px){
  display:flex;
  justify-content:space-between;
  width:100%;
  height:90px;
}
`
const SecaoResponsivo = styled.section`
    display:none;
@media screen and (max-width:360px){
  display:flex;
  align-items:center;
  height:75px;
  
  
  
}
`
const SecaoResponsivo2 = styled.section`
  display:none; 
  @media screen and (max-width:360px){
  display:flex;
  flex-direction:row-reverse;
  align-items:flex-start;
  width:70%;
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
  @media screen and (max-width:360px){
    font-size:16px;
    padding:2px;
    
}
  `
const Logo1 = styled.img`
    width:65px;
    height:65px;
    margin-left:10px;
    margin-top:10px ;
    border-radius:50px;
    border: solid green;
  @media screen and (max-width:360px){
    width:60px;
    height:60px;
    
    

    
  
} 
`
const Secao1 = styled.section`
    width:100%;
    display:flex;
    justify-content:space-between;
    @media screen and (max-width:360px){
   display:none;
  }
`

function App() {
  const [count, setCount] = useState(0)

  const [open, useOpen] = useState(false)


  const Mudar = () => {
    if (open === false) { useOpen(true) }
    else { useOpen(false) }
  }

  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <NavBar>

          <DivResponsivo>
            <SecaoResponsivo><Logo1 src={Logo} alt="" /></SecaoResponsivo>

            <SecaoResponsivo2>

            
            <Botao onClick={Mudar}>☰</Botao>

            {open && <ListaResponsiva>
              <Linha>
                <Li to="/" >Inicio</Li>
              </Linha>
              <Linha>
                <Li to="sobre">Sobre</Li>
              </Linha>
              <Linha>
                <Li to="portfolio">Portfolio</Li>
              </Linha>
              <Linha>
              <Li to="contatos">Contato</Li>
            </Linha>
              
            </ListaResponsiva>}
            </SecaoResponsivo2>

          </DivResponsivo>

          <Secao1>
            <Logo1 src={Logo} alt="" />
        
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
            <Linha>
              <Li to="contatos">Contato</Li>
            </Linha>
          </Lista>
        </NavBar>

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contatos" element={<Contato/>}/>
        </Routes>


      </BrowserRouter>

    </>
  )
}

export default App
