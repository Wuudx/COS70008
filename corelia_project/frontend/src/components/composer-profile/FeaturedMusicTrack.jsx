import React from "react";
import styled from "styled-components";
import ShortSummary from "./ShortSummary";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    gap: 1em;
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    align-self: start;
    justify-self: center;
`;

const FeaturedMusicTrack = ({ composerImage, aboutInformation }) => {
    return (
        <FlexContainer>
            <Img src={composerImage} alt="Composer Picture" />
            <ShortSummary
                name={aboutInformation.name}
                nationality={aboutInformation.nationality}
                yearOfBirth={aboutInformation.yearOfBirth}
                yearOfDeath={aboutInformation.yearOfDeath}
            />
        </FlexContainer>
    );
};

export default FeaturedMusicTrack;
