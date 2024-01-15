import styled, { createGlobalStyle } from "styled-components"
import Inverno from '../assets/port img/inverno.jpeg'
import Calc from '../assets/port img/calculadora.jpeg'
import Contador from '../assets/port img/contador.jpeg'
import Outubro from '../assets/port img/outubro.jpeg'
import Fanta from '../assets/port img/fantastika.jpeg'
import Html from '../assets/html.png'
import Css from '../assets/css-3.png'
import JvS from '../assets/js.png'
import Rea from '../assets/React.png'
import Sass from '../assets/sass.png'
import Sc from '../assets/styled-components.png'

const Headerstyled = styled.header`
    width:100%;
    background: rgb(0,1,13);
    background: linear-gradient(0deg, rgba(0,1,13,1) 34%, rgba(1,2,26,1) 58%, rgba(1,3,38,1) 67%);
     display:flex;
@media screen and (max-width:360px){
    flex-direction:column;
 
}  

@media screen and (max-width:420px){
    flex-direction:column;
 
} 
   
`
const Secao = styled.section`
    display:flex;
    flex-wrap:wrap;
    width:50%;
    height:55em;
    
@media screen and (max-width:360px){
    width:100%;
    height:28em;
     
}

@media screen and (max-width:420px){
    width:100%;
    height:28em;
 
} 
`
const Texto = styled.section`
    width:45%;
    height:150px;
    margin-top:20px;
    color:white;
@media screen and (max-width:360px){
    font-size:10px;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    height:100px;
}
@media screen and (max-width:420px){
   font-size:10px;
   font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   height:100px;
}

`

const Secao2 = styled.section`
   display:flex;
    flex-wrap:wrap;
    width:50%;
    height:35em;
@media screen and (max-width:360px){
    height:20em;
    width:100%;
}
@media screen and (max-width:420px){
   height:20em;
   width:100%;
 
}
`
const Img = styled.img`
    width:300px;
    height:200px;
    padding:10px;
    margin:20px;
    border:solid black;
    box-shadow:5px 5px 5px #5B83A6;
    background-color:white;
    &:hover{
        transform: scale(1.02);
        box-shadow: 2px 2px 5px 9px green;
    }
    
@media screen and (max-width:360px){
   width:150px;
   height:100px;
   padding:2px;
  
}
@media screen and (max-width:420px){
   width:150px;
   height:100px;
   padding:2px;
 
}
`
const Fig = styled.img`
    width:35px;
    height:35px;
 @media screen and (max-width:360px){
   width:20px;
   height:20px;
  
}
@media screen and (max-width:420px){
    width:20px;
    height:20px;
 
}
`

export default function Portfolio() {
    return (
        <Headerstyled>
            <Secao>

                <figure>
                    <a href="https://desafio-inverno.netlify.app/" target="_blank">
                        <Img src={Inverno} alt="" /> </a>
                </figure>
                <Texto>
                    <Fig src={Html} alt="" />
                    <Fig src={Css} alt="" />
                    <p>Página criada utilizando apenas HTML e CSS foi um desafio lançado para fixação de conteúdo.</p>
                </Texto>


                <figure>
                    <a href="https://atvcalculadora.netlify.app/" target="_blank">
                        <Img src={Calc} alt="" /> </a>
                </figure>

                <Texto>
                    <Fig src={Rea} alt="" />
                    <Fig src={Sc} alt="" />
                    <p>Calculadora de operações básicas, onde foi trabalhado principalmente a utilização de UseState.
                        (responsivo para celulares)
                    </p>
                </Texto>
                <figure>
                    <a href="https://roaring-dragon-fbdcb5.netlify.app/" target="_black">
                        <Img src={Outubro} alt="" /></a>
                </figure>

                <Texto>
                    <Fig src={Rea} alt="" />
                    <Fig src={Sc} alt="" />
                    <p>Lançado no mês de outubro, o desafio foi realizado utilizando React e Styled Components.</p>
                </Texto>
            </Secao>

            <Secao2>
                <figure>
                    <a href="https://tubular-baklava-b53490.netlify.app/" target="_blank">
                        <Img src={Fanta} alt="" /></a>
                </figure>
                <Texto>
                    <Fig src={Html} alt="" />
                    <Fig src={Css} alt="" />
                    <p>Desafio final do módulo 1 do curso de front-end, o objetivo era criar um site responsivo utilizando HTML, CSS e @media.
                        (responsivo para celulares).
                    </p>
                </Texto>

                <figure>
                    <a href="https://github.com/Rodrigo-Sousa1/Contador-react/tree/main/contador" target="_blank">
                        <Img src={Contador} alt="" /> </a>
                </figure>
                <Texto>
                    <Fig src={Rea} alt="" />
                    <Fig src={Sc} alt="" />
                    <p>Atividade de criar um contado utilizando React.js onde o objetivo é criar um contador que vai de 0 a 10 sem ultrapassar e voltar de 10 a 0 sem ultrapassar.</p>
                </Texto>

            </Secao2>
        </Headerstyled>

    )
}