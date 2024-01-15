import styled, { createGlobalStyle } from "styled-components"
import Html from '../assets/html.png'
import Css from '../assets/css-3.png'
import JvS from '../assets/js.png'
import Rea from '../assets/React.png'
import Sass from '../assets/sass.png'
import Sc from '../assets/styled-components.png'


const Headerstyled = styled.header`
    width:100%;
    height:80vh;
    display:flex;
    justify-content:center;
    align-items:center;
    background: rgb(0,1,13);
    background: linear-gradient(0deg, rgba(0,1,13,1) 34%, rgba(1,2,26,1) 58%, rgba(1,3,38,1) 67%);
    flex-direction:column;
@media screen and (max-width:420px){
  height:100vh;
  width:100%;
}
`
const Secao = styled.section`
    border:solid;
    width:30em;
    height:15em;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    box-shadow:3px 3px 3px #5B83A6;
    background-color:white;
@media screen and (max-width:360px){
  width:100%;
  height:12em;
}
@media screen and (max-width:420px){
  width:100%;
}

`
export default function Inicio() {
    return (
        <Headerstyled>

            <Secao>

                <h2>Olá, me chamo</h2>
                <h1>Rodrigo Sousa</h1>
                <h3>Desenvolvedor Front End</h3>

            </Secao>

        </Headerstyled>
    )
}
