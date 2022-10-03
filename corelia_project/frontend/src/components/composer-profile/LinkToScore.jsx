import React from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const Anchor = styled.a`
    text-decoration: none;
    color: white;
    font-family: lato-bold;
    background: ${stylingConstants.colours.blue3};
    &:hover {
        background: ${stylingConstants.colours.blue4};
    }
    border-radius: 0.4em;
    padding: 0.5em;
    width: fit-content;
    height: fit-content;
`;

const LinkToScore = ({ linkToScore }) => {
    return (
        // We use an anchor tag here because react router's "Link" component is only meant to be used for linking inside websites.
        <Anchor href={linkToScore} target="_blank">
            SCORE
        </Anchor>
    );
};

export default LinkToScore;
