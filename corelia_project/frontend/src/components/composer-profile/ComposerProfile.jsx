import React from "react";
import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FeaturedMusicTrack from "./FeaturedMusicTrack";
import ComposerInformation from "./ComposerInformation";

const Container = styled.div`
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const OuterFlexContainer = styled.div`
    display: flex;
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
        website: "",
        biography:
            "Ann Cleare is an Irish composer working in the areas of concert music, opera, extended sonic environments, and hybrid instrumental design. Her work explores the static and sculptural nature of sound, probing the extremities of timbre, texture, colour, and form. She creates highly psychological and corporeal sonic spaces that encourage a listener to contemplate the complexity of the lives we exist within, exploring poetries of communication, transformation, and perception.  ",
        yearOfBirth: 1832,
        yearOfDeath: 1921,
        recordingLink: "https://www.youtube.com/watch?v=AxQ3acoWXY0",
    });

    const composerName = `${composer.firstName} ${composer.lastName}`;

    const aboutInformation = {
        name: composerName,
        nationality: composer.nationality,
        yearOfBirth: composer.yearOfBirth,
        yearOfDeath: composer.yearOfDeath,
        recordingLink: composer.recordingLink,
    };

    return (
        <Container>
            <OuterFlexContainer>
                <FeaturedMusicTrack
                    composerImage={composer.image}
                    featuredSong={composer.featuredSong}
                    linkToScore={composer.linkToScore}
                />
                <ComposerInformation
                    name={composerName}
                    nationality={composer.nationality}
                    biography={composer.biography}
                    aboutInformation={aboutInformation}
                />
            </OuterFlexContainer>
        </Container>
    );
};

export default ComposerProfile;
