import React from "react";
import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import MusicPlayer from "./MusicPlayer";
import LinkToScore from "./LinkToScore";

const Container = styled.div`
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const OuterFlexContainer = styled.div`
    display: flex;
`;

const LeftFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
`;

const RightFlexContainer = styled.div`
    display flex;
    flex-direction: column;
`;

// Note that the composer id is in state that was passed with useNavifate. This will be used to fetch composer id from api.
const ComposerProfile = () => {
    // The below code snippet will be used once data is in api.
    // const location = useLocation();
    // const composerId = location.state.composerId;

    const [composer, setComposer] = useState({
        id: 1,
        firstName: "Samantha",
        lastName: "Smith",
        image: "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        featuredSong: "https://www2.cs.uic.edu/~i101/SoundFiles/Fanfare60.wav",
        linkToScore: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        nationality: "Australia",
    });

    const composerName = composer.firstName + composer.lastName;

    return (
        <Container>
            <OuterFlexContainer>
                <LeftFlexContainer>
                    <img src={composer.image} alt="Composer Picture" />
                    <h4>Featured Music Track</h4>
                    <MusicPlayer linkToSong={composer.featuredSong} />
                    <LinkToScore linkToScore={composer.linkToScore} />
                </LeftFlexContainer>
                <RightFlexContainer>
                    {/* This will be a flag next to composer name instead of nationality in text */}
                    <div>{`${composerName} ${composer.nationality}`}</div>
                    <div>Clarinet, Piano</div>
                </RightFlexContainer>
            </OuterFlexContainer>
        </Container>
    );
};

export default ComposerProfile;
