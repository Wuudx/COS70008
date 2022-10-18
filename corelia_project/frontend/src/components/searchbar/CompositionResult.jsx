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

const CompositionTitle = styled.div`
    font-family: 'Lato-Bold';
    font-size: 1em;
    margin-bottom: 5px;
    align-self: flex-start;
`;

const CompositionAuthor = styled.div`
    font-family: 'Lato-Regular';
    font-size: 0.8em;
    align-self: flex-start;
`;

const CompositionResult = ({ composition }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/watch-listen/${composition.id}`);
    };

    return (
        <Container onClick={handleClick}>
            <CompositionTitle>{composition.name}</CompositionTitle>
            <CompositionAuthor>{composition.composer_name}</CompositionAuthor>
        </Container>
    );
};
export default CompositionResult;
