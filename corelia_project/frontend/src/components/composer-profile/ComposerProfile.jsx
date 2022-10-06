import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import MusicPlayer from "./MusicPlayer";
import LinkToScore from "./LinkToScore";
import Navbar from "./Navbar";
import Biography from "./Biography";
import { useLocation } from "react-router-dom";
import About from "./About";

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
    width: 50%;
`;

const H1 = styled.h1`
    margin: 0px;
`;

// Note that the composer id is in state that was passed with useNavifate. This will be used to fetch composer id from api.
const ComposerProfile = () => {
    // The below code snippet will be used once data is in api.
    // const location = useLocation();
    // const composerId = location.state.composerId;

    const { pathname } = useLocation();
    const [composerInformationElement, setComposerInformationElement] =
        useState();

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

    useEffect(() => {
        if (pathname.includes("biography")) {
            setComposerInformationElement(
                <Biography biography={composer.biography} />
            );
        } else if (pathname.includes("about")) {
            setComposerInformationElement(
                <About aboutInformation={aboutInformation} />
            );
        }
    }, [pathname]);

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
                    <H1>{`${composerName} ${composer.nationality}`}</H1>
                    <div>Clarinet, Piano</div>
                    <Navbar />
                    {composerInformationElement}
                </RightFlexContainer>
            </OuterFlexContainer>
        </Container>
    );
};

export default ComposerProfile;
