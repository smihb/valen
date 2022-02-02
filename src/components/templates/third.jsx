import React from 'react';
import styled from 'styled-components';

import pianoImg from '../../img/piano.jpg'
import guitarraImg from '../../img/guitarra.jpg'
import wsImg from '../../img/ws-icon.png'

const Third = () =>{
    return(
        <Container>
            <FlexContainer>
                <Text>
                    <H3>¿Por qué<br /> Cuentos de Camino <br />Online?</H3>   
                    <P>Desde que Quintero y Delgado Estévez decidieron extraer su programa de las cabinas de 
                        radio para adaptarlo a escenarios, Cuentos de Camino, show producido por Alicia Sergent, 
                        se convirtió en un éxito de taquilla. 
                    </P>

                    <P>
                    La música, el humor fino, la gracia, la esencia 
                        de la venezolanidad, la química del dúo… Una mezcla de factores hace que cada experiencia 
                        despierte emociones y carcajadas, tanto en sus presentaciones en Venezuela, como las 
                        producidas por Guataca en Panamá y Estados Unidos.
                    </P>

                    <P>
Para las personas que no pudieron estar en la última gira de Cuentos de Camino, existe una nueva oportunidad.
La despedida será esta vez desde una experiencia Online, donde no habrá barreras que impidan 
participar a nadie, una manera en que podamos hacer una conexión global.



                    </P>


                    <P>«Siento que en la hora y media que dura Cuentos de Camino, Venezuela está ahí —ha dicho 
                        Valentina Quintero—. Está presente con las historias, con la música, los sabores, con el 
                        amor y la entrega. La experiencia es siempre muy emocionante, muy emotiva». 
                    </P>                 
                    <P>Formada entre la Universidad Católica Andrés Bello y la Universidad de Boston, la caraqueña 
                        Valentina Quintero hizo del turismo nacional una vocación. A través de su programa Bitácora, 
                        que transmitía RCTV, al igual que su longeva columna Manual de ociosidades en la revista Todo 
                        en domingo y El Nacional y sus agendas turísticas, la periodista se convirtió en una de las 
                        grandes divulgadoras de las bondades de la geografía venezolana, así como defensora a ultranza 
                        de su medio ambiente.
                    </P>
                </Text>
                <ImgContainer>
                    <img src={pianoImg} alt="Cuentos de Camino" />
                </ImgContainer>
            </FlexContainer>
            <FlexContainer>
                
                <ImgContainer2>
                    <img src={guitarraImg} alt="Cuentos de Camino" />
                </ImgContainer2>
                <Text>
                    <P>A pesar de ser biólogo y de haber sido investigador del prestigioso Instituto de 
                        Investigaciones Científicas de Venezuela (IVIC), al nativo de Calabozo, Guárico, 
                        Miguel Delgado Estévez lo conocemos principalmente como miembro de El Cuarteto, 
                        uno de los ensambles instrumentales más importantes del país. 
                    </P>
                    <P>
                        El guitarrista también 
                        perteneció a la agrupación Los Anauco, ha acompañado a grandes cantantes como Morella 
                        Muñoz y ha participado en espectáculos como En la vida hay amores, concebido por César
                        Miguel Rondón. Como locutor, brilló en su dueto con Pedro León Zapata en el hilarante 
                        espacio Divagancias. 
                    </P>   
                    <P>
                    Desde que las voces de Quintero y Delgado Estévez se unieron en 
                        Cuentos de camino en 2005, su programa se convirtió en una referencia, tanto así que 
                        trascendió y se convirtió en un exitoso espectáculo en vivo. 
                    </P>                     
                    
                </Text>
                <ImgContainer3>
                    <img src={guitarraImg} alt="Cuentos de Camino" />
                </ImgContainer3>
            </FlexContainer>

            <A href="#finalForm">
                <Button>
                Reserva tu lugar aquí y sé parte del evento más grande del 2022 dedicado a Venezuela.
                </Button>
            </A>
            

        </Container>
    );
}
const Container = styled.div`
    background-color: #1b1b1b;
    padding: 50px 0; 
`;
const FlexContainer = styled.div`

    @media(min-width: 900px){
        display: flex;
        justify-content: center;
    }
`;
const Text = styled.div`

    @media(min-width: 900px){
        max-width: 500px;
    }
`;
const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > img{
        width: 100%;
    }
    @media(min-width: 900px){
        width: 500px;
        margin: 0 20px;
    }
`;
const ImgContainer2 = styled(ImgContainer)`
display: none;
@media(min-width: 900px){
    display: flex;
}
`;
const ImgContainer3 = styled(ImgContainer)`
display: flex;
@media(min-width: 900px){
    display: none;
}
`;
const H3 = styled.h3`
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
    margin: 20px auto;

    & > br{
        display: none;
    }
    @media(min-width: 900px){
        & > br{
            display: block;
        }
    }
`;
const P = styled.p`
    color: #f1f1f1;
    padding: 0 5px;
    margin: 30px auto;

`;
const A = styled.a`
    display: block;
    background-color: orange;

    margin: 50px 10px;
    max-width: 1200px;
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
export default Third;