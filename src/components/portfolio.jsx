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
    background-color:#010326;
    
   
`

const Secao = styled.section`
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:40vh;
    
@media screen and (max-width:360px){
    flex-direction:column;
    height:85vh;
  
}
`

const Secao2 = styled.section`
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    height:40vh;
@media screen and (max-width:360px){
    flex-direction:column;
    height:55vh;
}
`
const Img = styled.img`
    width:300px;
    height:200px;
    padding:10px;
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
  
}
`
const Fig = styled.img`
    width:35px;
    height:35px;
 @media screen and (max-width:360px){
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
                    <figcaption>
                        <Fig src={Html} alt="" />
                        <Fig src={Css} alt="" />
                    </figcaption>
                </figure>

                <figure>
                    <a href="https://atvcalculadora.netlify.app/" target="_blank">
                        <Img src={Calc} alt="" /> </a>
                    <figcaption>
                        <Fig src={Rea}alt="" />
                        <Fig src={Sc} alt="" />
                    </figcaption>
                </figure>

                <figure>
                    <a href="https://roaring-dragon-fbdcb5.netlify.app/" target="_black">
                        <Img src={Outubro} alt="" /></a>
                    <figcaption>
                        <Fig src={Rea} alt="" />
                        <Fig src={Sc} alt="" />
                        </figcaption>
                </figure>

            </Secao>

            <Secao2>
                <figure>
                    <a href="https://tubular-baklava-b53490.netlify.app/" target="_blank">
                        <Img src={Fanta} alt="" /></a>
                        <figcaption>
                            <Fig src={Html} alt="" />
                            <Fig src={Css} alt="" />
                        </figcaption>
                </figure>

                <figure>
                    <a href="https://github.com/Rodrigo-Sousa1/Contador-react/tree/main/contador" target="_blank">
                        <Img src={Contador} alt="" /> </a>
                        <figcaption>
                            <Fig src={Rea} alt="" />
                            <Fig src={Sc} alt="" />
                        </figcaption>
                </figure>

            </Secao2>
        </Headerstyled>

    )
}