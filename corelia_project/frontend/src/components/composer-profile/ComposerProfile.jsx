import React from "react";
import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FeaturedMusicTrack from "./FeaturedMusicTrack";
import ComposerInformation from "./ComposerInformation";
import { useParams } from "react-router-dom";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import { getComposerById } from "../../api/composers";

const Container = styled.div`
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const OuterFlexContainer = styled.div`
    display: flex;
`;

const ComposerProfile = () => {
    const { composerId } = useParams();
    const { data, isLoading, error } = useFetchOnPageLoad(() =>
        getComposerById(composerId)
    );
    const composer = data[0] || {};

    const composerName = `${composer.firstName} ${composer.lastName}`;

    const aboutInformation = {
        name: composerName,
        nationality: composer.nationality,
        yearOfBirth: composer.birth,
        yearOfDeath: composer.death,
        recordingLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };

    let content;
    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (error) {
        content = <div>{error.message}</div>;
    } else {
        content = (
            <Container>
                <OuterFlexContainer>
                    <FeaturedMusicTrack
                        composerImage={composer.image}
                        featuredSong="https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav"
                        linkToScore="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    />
                    <ComposerInformation
                        biography={composer.biography}
                        aboutInformation={aboutInformation}
                    />
                </OuterFlexContainer>
            </Container>
        );
    }

    return content;
};

export default ComposerProfile;
