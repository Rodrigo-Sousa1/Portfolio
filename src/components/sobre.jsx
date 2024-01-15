import styled, { createGlobalStyle } from "styled-components"
import React, { useState, useEffect } from 'react'
import Html from '../assets/html.png'
import Css from '../assets/css-3.png'
import JvS from '../assets/js.png'
import Rea from '../assets/React.png'
import Sass from '../assets/sass.png'
import Sc from '../assets/styled-components.png'


const Headerstyled = styled.header`
    width:100%;
    height:98vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background: rgb(0,1,13);
    background: linear-gradient(0deg, rgba(0,1,13,1) 34%, rgba(1,2,26,1) 58%, rgba(1,3,38,1) 67%);
    @media screen and (max-width:420px){
        height:100vh;
    }
    `

    const Font = styled.h3`
        font-size:19px;
    @media screen and (max-width:360px){
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:17px;
    }
    @media screen and (max-width:420px){
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size:17px;
    }    

    `

const Secao = styled.section`
    border:solid;
    width:45em;
    height:12em;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow:3px 3px 3px #5B83A6;
    background-color:#F2F2F2;
    margin-bottom: 50px;
@media screen and (max-width:360px){
    width:20em;
    height:21em;
    margin-bottom:0px;}
@media screen and (max-width:420px){
    width:80%;
    height:50vh;
    margin-bottom:0px; 
}
`
// animação

const Img = styled.img`
    width:90px;
    height:45px;
    position:relative;
    animation:Movimento 8s linear infinite;
    @keyframes Movimento {
        0%   { left:-65px; top:0px;}
        100%  { left:680px; top:0px;}
    }
@media screen and (max-width:360px){
  width:30px;
  height:45px;
  
  }  
`
const Gif = styled.section`
    width:53%;
    height:3em;
    overflow:hidden;
 @media screen and (max-width:360px){
    width:100%;
    height:3em;
  
}
@media screen and (max-width:420px){
    width:100%;
    height:3em;
  
}

`

const Secao2 = styled.section`
    width:100%;
    height:15vh;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
`
const Logos = styled.img`
    width:50px;
    height:50px;
@media screen and (max-width:360px){
    width:35px;
    height:35px;
    margin-bottom:10px;
    margin-top:25px;
}
`
const Text = styled.h3`
    font-size:25px;
    margin:10px;
    color:white;
@media screen and (max-width:360px){
  font-size:20px;
  margin-top:25px;
  } 
`


export default function Sobre() {
    
const MoverGif=() => {
    const [position, setPositon] =useState({x:0, y:0})}
    return ( 
        <Headerstyled>
            <Gif>

            <Img src="https://pa1.aminoapps.com/6547/6ff6730ac7ae0ceaac2c00664f0016d794af4859_hq.gif" alt="" />
            
            </Gif>
            <Secao>
                <Font>
                Olá, meu nome é Rodrigo Sousa. Resido na cidade de Fortaleza/CE. Sou formado no curso tecnólogo de Gestão de Serviços Jurídicos e Notariais pela Universidade Paulista (Unip), concluído no ano de 2021. Atualmente, exerço atividades na área de vendas como representante comercial pela empresa Pet Bontrato. Me especializo em Front End pela instituição Vai Na Web, onde já possuo conhecimento em HTML5, CSS3, React.js, Styled Components, JavaScript e Sass. </Font>
            </Secao>
                <Text>Skills</Text>
            <Secao2>
                <Logos src={Html} alt="Html" />
                <Logos src={Css} alt="Css3" />
                <Logos src={JvS} alt="javascrpit" />
                <Logos src={Rea} alt="React.js" />
                <Logos src={Sass} alt="Sass" />
                <Logos src={Sc} alt="Styled components" />

            </Secao2>
            
        </Headerstyled>
    )
}
