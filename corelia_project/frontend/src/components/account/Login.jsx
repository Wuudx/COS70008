import styled from 'styled-components';
import React from 'react';
import stylingConstants from '../../utils/styling';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, useAuthDispatch, useAuthState } from '../../context';

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
    border-radius: 20px;
    box-shadow: 35px 35px 70px #ababab, -35px -35px 70px #ffffff;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

    & > h1 {
        font-size: 2rem;
        margin: 0 0 1rem 0;
    }
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

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const dispatch = useAuthDispatch();
    const { loading, error } = useAuthState();

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
                {error ? <p>{error}</p> : null}
                <Form onSubmit={handleLogin}>
                    {/* <label htmlFor='username'>Username</label> */}
                    <Input
                        type='text'
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={loading}
                        placeholder='Username'
                    />
                    {/* <label htmlFor='password'>Password</label> */}
                    <Input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={loading}
                        placeholder='Password'
                    />

                    <Button type='submit' disabled={loading}>
                        Login
                    </Button>
                </Form>
                <p>Forgot password?</p>
            </LoginBox>
        </LoginDiv>
    );
};
export default Login;
