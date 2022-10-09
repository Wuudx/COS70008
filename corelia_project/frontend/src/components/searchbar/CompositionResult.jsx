import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
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
    return (
        <Container>
            <CompositionTitle>{composition.name}</CompositionTitle>
            <CompositionAuthor>{composition.composer_name}</CompositionAuthor>
        </Container>
    );
};
export default CompositionResult;
