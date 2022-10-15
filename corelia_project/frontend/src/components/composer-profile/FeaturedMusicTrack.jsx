import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
`;

const H1 = styled.h1`
    margin: 0px;
`;

const Img = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
    align-self: center;
    justify-self: center;
`;

const FeaturedMusicTrack = ({ composerImage }) => {
    return (
        <FlexContainer>
            <Img src={composerImage} alt="Composer Picture" />
        </FlexContainer>
    );
};

export default FeaturedMusicTrack;
