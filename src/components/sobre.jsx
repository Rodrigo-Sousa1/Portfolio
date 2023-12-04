import styled, { createGlobalStyle } from "styled-components"
import React, { useState, useEffect } from 'react';


const Headerstyled = styled.header`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#010326;
    `

    const Font = styled.h3`
        font-size:19px;
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
    margin-bottom: 100px;
@media screen and (max-width:360px){
    width:20em;
    height:25em;
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
    width:45em;
    height:3em;
    
    overflow:hidden;
 @media screen and (max-width:360px){
    width:100%;
    height:3em;
  
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



        </Headerstyled>
    )
}