import React from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, useAuthDispatch, useAuthState } from '../../context';

const ForgotPasswordFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const Div = styled.div`
    display: flex;
    padding: 20px;
    font-size: 2rem;
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Input = styled.input`
    width: 100%;
    padding: 0.5rem 1rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 1.5rem;
`;

const Button = styled.button`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: 1px solid #ccc;
    border-radius: 1.5rem;
    background-color: ${stylingConstants.colours.blue1Percent100};
    color: #fff;

    &:hover {
        background-color: ${stylingConstants.colours.blue2Percent100};
    }
`;

const ForgotPasswordForm = ({ handleChangeView }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <ForgotPasswordFormContainer>
            <Div>Reset Password</Div>
            <Form onSubmit={handleSubmit}>
                <Input
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type='submit'>Send Reset Email</Button>
            </Form>
        </ForgotPasswordFormContainer>
    );
};

export default ForgotPasswordForm;
