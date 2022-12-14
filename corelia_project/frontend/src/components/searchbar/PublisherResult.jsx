import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
    cursor: pointer;
`;

const PublisherName = styled.div`
    font-family: 'Lato-Bold';
    font-size: 1em;
    margin-bottom: 5px;
    align-self: flex-start;
`;

const PublisherResult = ({ publisher }) => {
    return (
        <Container>
            <PublisherName>{publisher.name}</PublisherName>
        </Container>
    );
};
export default PublisherResult;
