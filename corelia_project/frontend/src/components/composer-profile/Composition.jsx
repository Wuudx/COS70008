import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
    background-color: white;
    border-radius: 0.5em;
    padding: 1em;
    overflow: wrap;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

const Composition = ({ composition }) => {
    return (
        <FlexContainer>
            <p>{composition.name}</p>
            <a href={composition.recording_link} target="_blank">
                {composition.recording_link}
            </a>
        </FlexContainer>
    );
};

export default Composition;
