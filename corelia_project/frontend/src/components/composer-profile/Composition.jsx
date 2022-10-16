import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const FlexContainer = styled.div`
    background-color: #f5f5f5;
    border-radius: 0.5em;
    padding: 1em;
    overflow: wrap;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    p {
        margin: 0px;
        font-family: lato-bold;
    }
    cursor: pointer;
    transition: 0.8s;
    &:hover {
        background-color: ${stylingConstants.colours.blue2Percent50};
    }
`;

// TODO: Figure out why whenever there is a link tag for recording link, it is not responsive!!
const Composition = ({ composition }) => {
    const navigate = useNavigate();
    let compositionRecordingLinkElement;
    if (composition.recording_link) {
        compositionRecordingLinkElement = (
            <a href={composition.recording_link} target="_blank">
                {composition.recording_link}
            </a>
        );
    } else {
        compositionRecordingLinkElement = <span>Not Available</span>;
    }

    function navigateToComposition(e) {
        if (e.target.tagName.toLowerCase() !== "a") {
            // This is the case where composition was pressed but not the link.
            navigate(`/repertoire-library/${composition.id}`);
        }
    }

    return (
        <FlexContainer onClick={navigateToComposition}>
            <p>{composition.name}</p>
            <span>Recording Link: {compositionRecordingLinkElement}</span>
        </FlexContainer>
    );
};

export default Composition;
