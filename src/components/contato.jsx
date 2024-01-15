import styled, { createGlobalStyle } from "styled-components"
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'
import Gmail from '../assets/gmail.png'
import Download from '../assets/download.png'


const Headerstyled = styled.header`
     background: rgb(0,1,13);
    background: linear-gradient(0deg, rgba(0,1,13,1) 34%, rgba(1,2,26,1) 58%, rgba(1,3,38,1) 67%);
    height:80vh;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Secao = styled.section`
    width:100%;
    display:flex;
    justify-content:center;
    justify-content:space-evenly;

    
`
const Img = styled.img`
    width:100px;
    height:100px;
    &:hover{
        transform: scale(1.2)
    }
@media screen and (max-width:360px){
  width:50px;
  height:50px;
  }
  @media screen and (max-width:420px){
    width:50px;
    height:50px;
    
}
   
`
const Palavra = styled.figcaption`
    color:white;
    text-align:center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    
`

export default function Contato() {
    return (

        <Headerstyled>


            <Secao>
                <figure>
                    <a href="https://github.com/Rodrigo-Sousa1" target="_blank"><Img src={Github} alt="Github" /></a>
                    <Palavra>Github</Palavra>
                </figure>
                <figure>
                    <a href="https://www.linkedin.com/in/rodrigo-sousa-b531191bb/" target="_blank"><Img src={Linkedin} alt="Linkedin" /></a>
                    <Palavra>Linkedin</Palavra>
                </figure>
                <figure>
                    <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank"><Img src={Gmail} alt="Gmail" /></a>
                    <Palavra>E-mail</Palavra>
                </figure>
                <figure>
                    <a href="../assets/curriculo-rodrigo-sousa.pdf" download={true} ><Img src={Download} alt="Download" /></a>
                    <Palavra>Curriculo</Palavra>
                </figure>
            </Secao>


        </Headerstyled>
    )
}