import React from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { login, useAuthDispatch, useAuthState } from '../../context';

const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;

    & > h1 {
        font-size: 2rem;
        margin: 0;
        padding: 0 0 1rem 0;
    }
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

const P = styled.p`
    margin: 0.5rem 0;
    font-size: 0.8rem;
`;

const AccountLink = styled(Link)`
    color: ${stylingConstants.colours.blue1Percent100};
    cursor: pointer;
    user-select: none;
    text-decoration: none;

    &:hover {
        color: ${stylingConstants.colours.blue2Percent100};
    }
`;

const Error = styled.div`
    color: red;
    font-size: 0.8rem;
`;

const LoginForm = () => {
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
        <LoginFormContainer>
            <Div>Login</Div>
            {error ? <Error>{error}</Error> : null}
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
            <P>
                Forgot password?{' '}
                <AccountLink to='/forgot-password'>Click Here</AccountLink>
            </P>
            <P>
                Don't have an account?{' '}
                <AccountLink to='/signup'>Sign Up</AccountLink>
            </P>
        </LoginFormContainer>
    );
};

export default LoginForm;
