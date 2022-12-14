import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`;

const InnerFlexContainer = styled.div`
    display: flex;
    gap: 3em;
    justify-content: space-between;
    h3 {
        margin: 0px;
    }
    span,
    a {
        width: 10em;
    }
`;

const About = ({ aboutInformation }) => {
    let websiteElement;
    if (aboutInformation.website) {
        websiteElement = (
            <a href={aboutInformation.website} target="_blank">
                {aboutInformation.website}
            </a>
        );
    } else {
        websiteElement = <span>Information not available</span>;
    }

    return (
        <FlexContainer>
            <InnerFlexContainer>
                <h3>Name</h3>
                <span>{aboutInformation.name}</span>
            </InnerFlexContainer>{" "}
            <InnerFlexContainer>
                <h3>Nationality</h3>
                <span>{aboutInformation.nationality}</span>
            </InnerFlexContainer>{" "}
            <InnerFlexContainer>
                <h3>Year of Birth</h3>
                <span>{aboutInformation.yearOfBirth}</span>
            </InnerFlexContainer>{" "}
            <InnerFlexContainer>
                <h3>Year of Death</h3>
                <span>{aboutInformation.yearOfDeath || "-"}</span>
            </InnerFlexContainer>{" "}
            <InnerFlexContainer>
                <h3>Website</h3>
                {websiteElement}
            </InnerFlexContainer>
        </FlexContainer>
    );
};

export default About;
