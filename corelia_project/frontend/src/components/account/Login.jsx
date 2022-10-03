import styled from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, useAuthDispatch, useAuthState } from '../../context';

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
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            let response = await login(dispatch, { username, password });
            if (!response.user) return;
            navigate('/'); // redirect to homepage
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <LoginDiv>
            <LoginBox>
                <h1>Login</h1>
                {errorMessage ? <p>{errorMessage}</p> : null}
                <Form onSubmit={handleLogin}>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                    />
                    <p>Forgot password?</p>
                    <input type='submit' value='Login' disabled={loading} />
                </Form>
            </LoginBox>
        </LoginDiv>
    );
};
export default Login;
