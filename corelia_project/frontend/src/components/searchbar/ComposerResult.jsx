import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
    cursor: pointer;
`;

const ComposerName = styled.div`
    font-family: 'Lato-Bold';
    font-size: 1em;
    margin-bottom: 5px;
    align-self: flex-start;
`;

export const ComposerResult = ({ composer }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/discover-composers/${composer.id}`);
    };

    return (
        <Container onClick={handleClick}>
            <ComposerName>
                {composer.firstName} {composer.lastName}
            </ComposerName>
        </Container>
    );
};

export default ComposerResult;
