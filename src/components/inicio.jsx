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
const Secao2 = styled.section`
    width:50%;
    display:flex;
    justify-content:space-evenly;
    margin-top: 50px;
`
const Logos = styled.img`
    width:50px;
    height:50px;
@media screen and (max-width:360px){
    width:35px;
    height:35px;
    margin:5px;
  
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
