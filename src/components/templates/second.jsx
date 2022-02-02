import React from 'react';
import styled from 'styled-components';
import ImgTitleText from '../atoms/imgTitleText';


import imgPrueba from '../../img/imgPrueba.png'
import wsImg from '../../img/ws-icon.png'
import first from '../../img/first.jpg'
import fourth from '../../img/fourth.jpg'
import second from '../../img/second.jpeg'
import bg from '../../img/BG-2.jpg'

const Second = () =>{
    return(
        <Container>

            <H2>El fin de un bello ciclo <br />
            Última edición de Cuentos de Camino, esta vez Online. <br />
            Este 14 de febrero de 2022</H2>
            <br />
            <H2></H2>

            <Flex>
            <ImgTitleText 
                img={first}
                title={Text1}
                text={Text1}

            />
            <ImgTitleText 
                img={second}
                title={Text2}
                text={Text2}

            />
            </Flex>
            <Flex>
            <ImgTitleText 
                img={imgPrueba}
                title={Text3}
                text={Text3}

            />
            <ImgTitleText 
                img={fourth}
                title={Text4}
                text={Text4}

            />
            </Flex>

            <A href="#finalForm">
                <Button>
                    SI! QUIERO RESERVAR MIS ENTRADAS YA!!!
                </Button>
            </A>





            

        </Container>
    );
}
const Container = styled.div`
    min-height: 100vh;
    
    overflow: hidden;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #f0f0f0;
    background-image: url();

    @media(min-width: 600px){
        background-image: url();
    }
    @media(min-width: 900px){
        background-image: url();
    }
`;
const H2 = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    margin-top: 50px;
    text-transform: uppercase;

    @media(min-width: 900px){
        font-size: 2rem;
    }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 600px){
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
    }
`;
const A = styled.a`
    display: block;
    background-color: orange;

    margin: 10px;
    max-width: 900px;
    text-decoration: none;
    color: black;
    
    border-radius: 10px;
    text-align: center;
    padding: 15px 20px 10px;

    @media(min-width: 900px){
        margin: 10px auto 50px;
    }

`;
const Button = styled.div`
    margin: 0 auto;
    font-size: 1.3rem;
    font-weight: 700;

    &:after{
        content: '';
        display: block;
        width: 50px;
        height: 50px;
        margin: 0 auto;
        background-image: url(${wsImg});
        background-size: cover;
    }

    @media(min-width: 900px){
        margin: 10px auto;
        font-size: 1.5rem;
        transform: translate(-20px, -5px);

        &:after{
            display: inline-block;
            position: absolute;
            transform: translate(20%, -20%)
        }
    }
`;
const Text1 = "Compartir la experiencia que miles de venezolanos tuvieron en la última gira de estos grandes venezolanos a EEUU."
const Text2 = "A partir del 14 de febrero habrá una oferta especial para todos los que añoran ver a Valentina y a Miguel en el último Cuentos de Camino, esta vez a nivel Global."
const Text3 = "Los cuentos de Camino en vivo están llenos de humor, música, picardía, en fin, llenos de Venezuela."
const Text4 = "Lo vivido en Houston en la última función en vivo, fue mágica, por ello el 14 de febrero se abrirá una oportunidad única de volver a verlos juntos en un espectáculo dedicado a Venezuela."
export default Second;