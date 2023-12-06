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
    background-color:#010326;
    flex-direction:column;
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
  width:18em;
  height:12em;
}

`
export default function Inicio() {
    return (
        <Headerstyled>

            <Secao>

                <h2>Ola, me chamo</h2>
                <h1>Rodrigo Sousa</h1>
                <h3>Desenvolvedor Front End</h3>

            </Secao>

        </Headerstyled>
    )
}
