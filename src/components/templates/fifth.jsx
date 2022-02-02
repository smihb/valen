import React from 'react';
import styled from 'styled-components';

import wsImg from '../../img/ws-icon.png'
import Formulario from '../atoms/form';

const Fifth = () =>{
    return(
        <Container>
            <H2>No pierdas la gran oportunidad de ver a <br />
            Valentina Quintero y Miguel Delgado Estévez <br />
            compartiendo por última vez sus <br />
            <b>Cuentos de Camino</b></H2>


            <P>Entra ahora a nuestro exclusivo grupo de WhatsApp haciendo clic en el botón de abajo e informate sobre las distintas modalidades en las que puedes participar en este evento junto a Valentina Quintero y el Maestro Miguel Delgado Estévez.</P>
            
            {/* <A href="https://leadzap.me/15227/cuentosdecamino" target={'_blank'}>
                <Button>
                    Reserva tu entrada ahora!
                </Button>
            </A> */}
            < Formulario visible={true} id={'finalForm'}/>

        </Container>
    );
}
const Container = styled.div`
    min-height: 100vh;
    
    overflow: hidden;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: top center;
    background-color: #1b1b1b;
    background-image: url();

    @media(min-width: 600px){
        background-image: url();
    }
    @media(min-width: 900px){
        background-image: url();
    }
`;
const H2 = styled.h2`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 50px auto 30px;

    & > br{
        display: none;
    }
    &>b{
        font-size: 3.5rem;
        background: linear-gradient(orange, red);
        -webkit-background-clip: text;
        color: transparent;
    }
    @media(min-width: 900px){
        & > br{
            display: block;
        }
    }
`;
const P = styled.p`
    color: #fff;
    font-size: 1.5rem;
    max-width: 700px;
    margin: 0 auto;
    padding: 5px;
    text-align: center;
`;
const A = styled.a`
    display: block;
    background-color: orange;

    margin: 50px 10px;
    max-width: 500px;
    text-decoration: none;
    color: black;
    
    border-radius: 10px;
    text-align: center;
    padding: 15px 20px 10px 20px;

    @media(min-width: 900px){
        margin: 30px auto;
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
export default Fifth;