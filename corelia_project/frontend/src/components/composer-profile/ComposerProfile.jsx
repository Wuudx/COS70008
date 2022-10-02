import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import MusicPlayer from "./MusicPlayer";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    width: 20%;
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
    });

    return (
        <div>
            <FlexContainer>
                <img src={composer.image} alt="Composer Picture" />
                <h4>Featured Music Track</h4>
                <MusicPlayer song={composer.featuredSong} />
            </FlexContainer>
        </div>
    );
};

export default ComposerProfile;
