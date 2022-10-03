import React from 'react';
import { useAuthDispatch, logout, useAuth, useAuthState } from '../../context';
import { FiLogOut } from 'react-icons/fi';

const Logout = () => {
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        let response = logout(dispatch);
    };

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

    return <FiLogOut size='1.5em' onClick={handleLogout} />;
};
export default Logout;
