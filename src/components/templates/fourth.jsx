import React from 'react';
import styled from 'styled-components';

import bg from '../../img/BG-2.jpg'
import moment1 from '../../img/moment1.jpg'
import moment2 from '../../img/moment2.jpg'
import moment3 from '../../img/moment3.jpg'
import moment4 from '../../img/moment4.jpg'
import moment5 from '../../img/moment5.jpg'
import moment6 from '../../img/moment6.jpg'

const Fourth = () =>{
    return(
        <Container>
            <Filter>
            <H2>Algunas de las<br />
                cosas que podrás ver en<br />
                <b>Cuentos de Camino</b>
            </H2>
            <P>Estas son imágenes de lo que vas a disfrutar en Cuentos de Camino Online:</P>
            <GridContainter>
                <ImgCont>
                    <img src={moment1} alt="Cuentos de Camino" />
                </ImgCont>
                <ImgCont>
                    <img src={moment2} alt="Cuentos de Camino" />
                </ImgCont>
                <ImgCont>
                    <img src={moment3} alt="Cuentos de Camino" />
                </ImgCont>
                <ImgCont>
                    <img src={moment4} alt="Cuentos de Camino" />
                </ImgCont>
                <ImgCont>
                    <img src={moment5} alt="Cuentos de Camino" />
                </ImgCont>
                <ImgCont>
                    <img src={moment6} alt="Cuentos de Camino" />
                </ImgCont>

            </GridContainter>

            <Pf>Además de ser parte del movimiento más grande del 2022,
            Valentina y Miguel tienen preparadas grandes sorpresas que revelarán el 14 de febrero.
            </Pf>
            </Filter>
        </Container>
    );
}
const Container = styled.div`
    min-height: 100vh;
    
    
    overflow: hidden;
    background-size: 100%;
    background-repeat: repeat;
    background-position: top center;
    background-color: ;
    background-image: url();

    @media(min-width: 600px){
        background-image: url();
    }
    @media(min-width: 900px){
        background-image: url(${bg});
        backdrop-filter: blur(0%);
    }
`;
const Filter = styled.div`
    height: 100%;
    padding-bottom: 50px;
    background-color: rgba(255, 255, 255, .5);
`;
const H2 = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    margin-top: 10px;

    &>b{
        font-size: 3.5rem;
        background: linear-gradient(orange, red);
        -webkit-background-clip: text;
        color: transparent;
    }

    @media(min-width: 900px){
        font-size: 2rem;
    }
`;
const GridContainter = styled.div`
    @media(min-width: 900px){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
`;
const ImgCont = styled.div`
    margin: 20px;
    max-width: 500px;

    & > img{
        display: block;
        width: 100%;
    }
    @media(min-width: 900px){
        margin: 50px 25px 0;
    }
`;
const P = styled.p`
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.2rem;
    text-align: center;
`;
const Pf = styled.h3`
    max-width: 1000px;
    margin: 50px auto 0;
    font-size: 1.7rem;
    text-align: center;


    @media(min-width: 900px){
        font-size: 2rem;
    }
`;
export default Fourth;