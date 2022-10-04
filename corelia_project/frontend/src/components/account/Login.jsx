import styled from 'styled-components';
import React from 'react';
import stylingConstants from '../../utils/styling';
import { useState } from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';
import SignUpForm from './SignUpForm';

import LoginForm from './LoginForm';

const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const LoginBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 2rem;
    min-height: 350px;
    max-height: 350px;
    min-width: 300px;
    max-width: 300px;
    border-radius: 20px;
    box-shadow: 35px 35px 70px #ababab, -35px -35px 70px #ffffff;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Login = () => {
    const [formState, setFormState] = useState('login');

    const handleChangeView = (view) => {
        setFormState(view);
        console.log(formState);
    };

    return (
        <LoginDiv>
            <LoginBox>
                {formState === 'login' ? (
                    <LoginForm handleChangeView={handleChangeView} />
                ) : formState === 'signup' ? (
                    <SignUpForm handleChangeView={handleChangeView} />
                ) : formState === 'forgotpassword' ? (
                    <ForgotPasswordForm handleChangeView={handleChangeView} />
                ) : (
                    <LoginForm handleChangeView={handleChangeView} />
                )}
            </LoginBox>
        </LoginDiv>
    );
};
export default Login;
