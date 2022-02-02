import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { yellow } from '../../lib/colors';

import title from '../../img/title.png'
import mainBg from '../../img/mainBg.webp'
import mainBgMedium from '../../img/mainBg-medium.webp'
import mainBgSmall from '../../img/mainBg-small.webp'
import icon from '../../img/ws-icon.png'
import Formulario from '../atoms/form';

const Main = () =>{

    const [visible, setVisible] = useState(true)

    const oscurecerBg = () =>{
        setTimeout(() => {
            setVisible(true)
        }, 1000);
    }

    useEffect(()=>{
        window.addEventListener('load', oscurecerBg())
        return(
            window.removeEventListener('load', oscurecerBg())
        )
    },[])


    return(
        <Container>
            <Filter visible={visible}>
               <TextGroup>
                    <Title 
                        src={title} 
                        visible={visible}
                        alt="Cuentos de Camino" 
                    />
                    <P visible={visible}>
                        
                        Revive los Momentos que Marcaron a Toda una Generación
                    </P>
                    <Pa visible={visible}>
                        Completa el Formulario y Reserva tu Entrada
                    </Pa>
               </TextGroup>
                <Formulario visible={visible}/>

                {/* <ButtonContainer visible={visible}>
                    <a href="#finalForm">
                        RESERVA TU ENTRADA AHORA!
                        <Span>
                            <img src={icon} alt="Cuentos de Camino" />
                        </Span>
                    </a>
                </ButtonContainer> */}
            </Filter>
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
    background-image: url(${mainBgSmall});

    @media(min-width: 600px){
        background-image: url(${mainBgMedium});
    }
    @media(min-width: 900px){
        background-image: url(${mainBg});
    }
`;
const Filter = styled.div`
    min-height: 100vh;
    transition: background-color 1s;
    background-color: ${props=>props.visible ? 'rgba(27, 27, 27, .3)' : ''};
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media(min-width: 900px){
        background-color: transparent;

        padding: 50px 10%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
    }
`;
const TextGroup = styled.div`
    margin-top: 220px;
    @media(min-width: 900px){
        margin-top: 70px;
        grid-column: -2 / -1;
        grid-row: 1 / -1;
    }
`;
const Title = styled.img`
    display: block;
    width: 350px;
    margin: 0 auto 10px;
    transition: opacity 1s .5s, transform 1s .5s;
    opacity: ${props=>props.visible ? '1' : '0'};
    transform: translateY(${props=>props.visible ? '0px' : '30px'});

    @media(min-width: 900px){
        width: 450px;
    }    
`;
const P = styled.p`
    color: #fff;
    max-width: 390px;
    margin: 0px auto;
    text-align: center;
    font-size: 1.4rem;
    line-height: 30px;
    transition: opacity 1s 1s, transform 1s 1s, background-color 1s 1s;
    opacity: ${props=>props.visible ? '1' : '0'};
    transform: translateY(${props=>props.visible ? '0px' : '30px'});
    
    margin: 10px auto 0px;
    font-weight: 700;

    @media(min-width: 900px){
        text-align: left;
        font-size: 2rem;
        line-height: 40px;
        background-color: rgba(27, 27, 27, .8);
        transform: translate(0px, ${props=>props.visible ? '0px' : '30px'});
        box-shadow: 0 0 15px rgba(27, 27, 27, 1);
    }
`;
const Pa = styled(P)`
    color: ${yellow};
    
    font-weight: 700;
    transition: opacity 1s 1.5s, transform 1s 1.5s, background-color 1s 1.5s;

`;
const ButtonContainer = styled.div`
    grid-column: 1 / 3;
    text-align: center;
    margin-top: 0px;
    transition: opacity 1s 2s, transform 1s 2s, background-color 1s 2s;
    opacity: ${props=>props.visible ? '1' : '0'};
    transform: translateY(${props=>props.visible ? '0px' : '30px'});

   

    & > a {
        color: black;
        font-size: 1.2rem;
        padding: 15px 50px 15px 20px;
        border-radius: 10px;
        font-weight: 700;
        text-decoration: none;
        background-color: orange;

        display: inline-block;
        
    }
    
    &: hover{
        transition: transform .5s;
        transform: scale(1.1);
    }
    

    @media(min-width: 900px){
        padding: 20px 70px 20px 50px;
        align-self: end;
        margin-bottom: 50px;
    }
`;
const Span = styled.span`
    podition: relative;
    padding-left: 10px;

    &>img{
        position: absolute;
        width: 40px;
        transform: translateY(-20%);
    }
`;
export default Main;