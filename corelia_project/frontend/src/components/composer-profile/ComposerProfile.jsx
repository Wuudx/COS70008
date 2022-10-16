import React from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";
import { getComposerById } from "../../api/composers";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import stylingConstants from "../../utils/styling";
import ComposerInformation from "./ComposerInformation";
import FeaturedMusicTrack from "./FeaturedMusicTrack";

const Container = styled.div`
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const OuterFlexContainer = styled.div`
    display: flex;
    gap: 2em;
`;

const LoaderFlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ComposerProfile = () => {
    const { composerId } = useParams();
    const [data, isLoading, error] = useFetchOnPageLoad(() =>
        getComposerById(composerId)
    );
    const composer = data[0] || {};

    const composerName = `${composer.firstName} ${composer.lastName}`;

    const aboutInformation = {
        name: composerName,
        nationality: composer.nationality_names,
        yearOfBirth: composer.birth,
        yearOfDeath: composer.death,
        website: composer.composer_website,
    };

    let content;
    if (isLoading) {
        content = (
            <LoaderFlexContainer>
                <ScaleLoader color={stylingConstants.colours.blue1} />
            </LoaderFlexContainer>
        );
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
                        composerId={composerId}
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
