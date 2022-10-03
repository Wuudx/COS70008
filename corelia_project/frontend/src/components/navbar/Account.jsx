import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { redirect, Link } from 'react-router-dom';

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 20px;
    cursor: pointer;
    user-select: none;
`;

const LinkDiv = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0 20px;
    cursor: pointer;
    user-select: none;
    font-family: lato-bold;
    text-decoration: none;
    color: black;
`;

const Account = () => {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        localStorage.hasOwnProperty('access_token')
            ? checkUserToken()
            : setIsLogged(false);
    }, []);

    const checkUserToken = () => {
        fetch('http://127.0.0.1:8000/users/user', {
            method: 'GET',
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.detail) {
                    localStorage.removeItem('access_token');
                    setIsLogged(false);
                } else {
                    setIsLogged(true);
                }
            });
    };

    const handleLogout = () => {
        fetch('http://127.0.0.1:8000/users/logout', {
            method: 'POST',
            headers: {
                Authorization: localStorage.getItem('access_token'),
            },
        }).then((res) => {
            localStorage.removeItem('access_token');
            setIsLogged(false);
            window.location.reload();
        });
    };

    if (isLogged) {
        // If user is logged in.
        return (
            <Div>
                <FiLogOut size='1.5em' onClick={handleLogout} />
            </Div>
        );
    } else {
        // If user is not logged in.
        return (
            <LinkDiv to='/login'>
                Login
                <FiLogIn size='1.5em' />
            </LinkDiv>
        );
    }
};
export default Account;
