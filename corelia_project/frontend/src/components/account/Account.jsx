import styled from 'styled-components';
import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useAuthState, useAuthDispatch } from '../../context/context';
import { authenticate } from '../../context';
import { useEffect } from 'react';
import LoggedInDetails from './LoggedInDetails';

const Div = styled.div`
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
    const user = useAuthState();

    if (user.token) {
        // If user is logged in.
        return (
            <Div>
                <LoggedInDetails />
            </Div>
        );
    } else {
        // If user is not logged in.
        return (
            <LinkDiv to='/login'>
                Login
                <FiLogIn size='1.5em' style={{ marginLeft: '0.5em' }} />
            </LinkDiv>
        );
    }
};
export default Account;
