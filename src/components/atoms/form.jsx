import React, { useState } from 'react';
import styled from 'styled-components';
import { casiBlanco } from '../../lib/colors';

const Formulario = ({visible, id}) =>{
    const [isValid, setIsValid] = useState(true)
    const [emailExist, setEmailExist] = useState(false)
    const [added, setAdded] = useState(false)




    const [form, setForm] = useState({
        nombre: {nombre:'', valid: null},
        email: {email: '', valid: null},
        pais: {pais: '', valid: null},
        numero: {numero: '', valid: null}
    })
    const handleChange = (e) =>{
        const {name, value} = e.target;
        let isValid = null
        if(value===''){
            isValid=null
        }else if(name==='nombre' || name==='pais'){
            isValid = formRegEx.test(value)
        }else if(name==='email'){
            isValid = emailRegEx.test(value)
        }else if(name==='numero'){
            isValid = numeroRegEx.test(value)
        }
        if(!isValid) setIsValid(true)
        if(emailExist) setEmailExist(false)
        if(added) setAdded(false)

        setForm({
            ...form,
            [name]: {
                [name]: value,
                valid: isValid
            }
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();


        let formIsValid = true
        for (const input in form) {
            if (Object.hasOwnProperty.call(form, input)) {
                const element = form[input];
                if(!element.valid) formIsValid = false
            }
        }
        if(!formIsValid) return setIsValid(false)




        const contact = {
            nombre: form.nombre.nombre,
            email: form.email.email,
            pais: form.pais.pais,
            numero: form.numero.numero

        }
        const resultado = await fetch('https://globalsystemllc.com/adduser.php', {
            method: 'POST',
            body: JSON.stringify(contact)
        })
        .then(res=>res.json())
        .then(res=>res)
        .catch(res=>console.log(res))

        
        console.log(resultado)
        if(resultado.result_code === 0) return setEmailExist(true)
        setAdded(true)
        setForm({
            nombre: {nombre:'', valid: null},
            email: {email: '', valid: null},
            pais: {pais: '', valid: null},
            numero: {numero: '', valid: null}
        })
        
    }
    return(
        <FormContainer visible={visible} id={id}>
            <Form onSubmit={e=>handleSubmit(e)}>
                <FormGroup>
                    <Label>Nombre <B>*</B></Label>
                    <Input 
                        name='nombre'
                        placeholder=' - Nombre'
                        isValid={form.nombre.valid}
                        value={form.nombre.nombre}
                        onChange={e=>handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Email <B>*</B></Label>
                    <Input 
                        name='email'
                        placeholder=' - Email'
                        isValid={form.email.valid}
                        value={form.email.email}
                        onChange={e=>handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>País <B>*</B></Label>
                    <Input 
                        name='pais'
                        placeholder=' - País'
                        isValid={form.pais.valid}
                        value={form.pais.pais}
                        onChange={e=>handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Número con Código de País<B>*</B></Label>
                    <Input 
                        name='numero'
                        placeholder=' - Número sin espacios o símbolos'
                        isValid={form.numero.valid}
                        value={form.numero.numero}
                        onChange={e=>handleChange(e)}
                    />
                </FormGroup>
                <FormGroup>
                    <Button>QUIERO PARTICIPAR EN EL EVENTO</Button>
                    {!isValid && <P><B>*</B> Llene los campos correctamente</P>}
                    {emailExist && <P><B>*</B> El email que intentas ingresar ya fue registrado</P>}
                    {added && <P><Bg>*</Bg> Has sido registrado correctamente</P>}
                </FormGroup>
            </Form>
        </FormContainer>
    );
}
const emailRegEx = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const formRegEx = /^.{4,50}$/;
const numeroRegEx = /^.[0-9]{5,20}$/;

const FormContainer = styled.div`
    transition: opacity 1s 2s, transform 1s 2s;
    opacity: ${props=>props.visible ? '1' : '0'};
    transform: translateY(${props=>props.visible ? '0px' : '30px'});

    @media(min-width: 900px){
        max-width: 700px;
        margin: 20px auto 0 ;
        grid-row: 1;
        grid-column: 1 / 3;
        align-self: end;
    }

`;
const Form = styled.form`
    margin: 10px auto 50px;

    @media(min-width: 900px){
        display: flex;
        flex-wrap: wrap;
        margin: 0px auto;
    }
`;
const FormGroup = styled.div`
    display: flex;
    max-width: 300px;
    margin: 0 auto;
    flex-direction: column;
    position: relative;

    @media(min-width: 520px){
        max-width: 500px;
    }
    @media(min-width: 900px){
        min-width: 280px
    }
`;
const Label = styled.label`
    color: ${casiBlanco};
    font-size: .8rem;
    margin: 5px 0;
    @media(min-width: 900px){
        font-size: .9rem;
        border-radius: 10px;
        padding-left: 10px;
        background-color: rgba(27, 27, 27, .8);
     }
`;
const Input = styled.input`
    height: 30px;
    font-size: 1.1rem;
    outline: none;
    outline: 2px solid ${props=>props.isValid ? '#00a25b' : (props.isValid === false) ? '#9d0000' : 'transparent'};
    padding: 0 5px;
    @media(min-width: 900px){
        height: 40px;
        border: none;
        border-radius: 10px;
        outline: 3px solid ${props=>props.isValid ? '#00a25b' : (props.isValid === false) ? '#9d0000' : 'transparent'};
    }
`;
const B = styled.b`
    color: red;
    padding-left: 5px;
`;
const Bg = styled(B)`
    color: #00a25b;
`;
const Button = styled.button`
    margin: 25px 0;
    padding: 10px 30px;
    font-size: 1rem;
    background-color: #00a25b;
    border: none;
    transition: transform .2s;
    color: white;
    font-weight: 700;


    &:hover{
        transform: scale(1.05);
    }
    @media(min-width: 900px){
        font-size: 1.2rem;
        border-radius: 10px;
     }
`;
const P = styled.p`
    color: ${casiBlanco};
    position: absolute;
    bottom: 0;
    left: 0%;
    transform: translate(0%);

`;
export default Formulario;