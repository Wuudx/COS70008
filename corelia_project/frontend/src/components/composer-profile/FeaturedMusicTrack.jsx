import React from 'react';
import styled from 'styled-components';
import MusicPlayer from './MusicPlayer';
import LinkToScore from './LinkToScore';

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

const FeaturedMusicTrack = ({ composerImage, featuredSong, linkToScore }) => {
    return (
        <FlexContainer>
            <Img src={composerImage} alt='Composer Picture' />
            <h4>Featured Music Track</h4>
            <MusicPlayer linkToSong={featuredSong} />
            <LinkToScore linkToScore={linkToScore} />
        </FlexContainer>
    );
};

export default FeaturedMusicTrack;
