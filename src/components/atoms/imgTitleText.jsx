import React from 'react';
import styled from 'styled-components';

const ImgTitleText = ({ img, title, text }) =>{
    return(
        <Container>
            <ImgCont>
            
                <Img src={img} alt="Cuentos de Camino" />
            </ImgCont>
            <Title>{title}</Title>
            {/* <P>{text}</P> */}

        </Container>
    );
}
const Container = styled.div`
    max-width: 350px;
    margin: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const ImgCont = styled.div`
    max-height: 233px;
    overflow: hidden;
`;
const Img = styled.img`
    width: 100%;
`;
const Title = styled.h3`
    font-size: 1.3rem;
    text-align: center;
    margin: 10px 0;
`;
const P = styled.p`

`;
export default ImgTitleText;