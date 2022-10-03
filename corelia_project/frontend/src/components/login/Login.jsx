import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginDiv = styled.div`
    display: flex;
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
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Login = () => {
    const [loginError, setLoginError] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };

        fetch('http://127.0.0.1:8000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.non_field_errors) {
                    // console.log(data.error);
                    console.log('error');
                    setLoginError(true);
                } else {
                    console.log('login');
                    localStorage.setItem('access_token', 'Token ' + data.token);
                    window.location.href = '/';
                }
            });
    };

    return (
        <LoginDiv>
            <LoginBox>
                <h1>Login</h1>
                <Form onSubmit={handleLogin}>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' />
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' />
                    <p>Forgot password?</p>
                    <input type='submit' value='Login' />
                    {loginError && <p>Invalid username or password</p>}
                </Form>
            </LoginBox>
        </LoginDiv>
    );
};
export default Login;
