import React from 'react';
import styled from 'styled-components';
import { useAuthState } from '../../context';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1rem 3rem 1rem;
`;

const Profile = () => {
    const user = useAuthState();

    return (
        <Container>
            <h1>Welcome {`${user.user.username}`}!</h1>
            
        </Container>
    );
};

export default Profile;