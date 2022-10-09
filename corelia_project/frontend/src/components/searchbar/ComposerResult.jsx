import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
`;

const ComposerName = styled.div`
    font-family: 'Lato-Bold';
    font-size: 1em;
    margin-bottom: 5px;
    align-self: flex-start;
`;

export const ComposerResult = ({ composer }) => {
    return (
        <Container>
            <ComposerName>
                {composer.firstName} {composer.lastName}
            </ComposerName>
        </Container>
    );
};

export default ComposerResult;
