import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetchOnParamChange from '../../hooks/useFetchOnParamChange';
import { getCompositionById } from '../../api/compositions';
import MusicPlayer from '../composer-profile/MusicPlayer';
import LinkToScore from '../composer-profile/LinkToScore';
import ScaleLoader from 'react-spinners/ScaleLoader';
import stylingConstants from '../../utils/styling';
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const CompositionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 300px;
    min-height: 300px;

    border-radius: 45px;
    background: #ffffff;
    box-shadow: 30px 30px 60px #cccccc, -30px -30px 60px #ffffff;
`;

const CompositionName = styled.h1`
    font-family: 'Lato-bold';
    font-size: 1.5em;
    margin: 10px;
    padding: 0;
`;

const CompositionArtist = styled.h2`
    font-family: 'Lato-regular';
    font-size: 1.2em;
    margin: 10px;
    padding: 0;
`;

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
    padding: 0;
`;

const Publisher = styled.p`
    font-family: 'Lato-regular';
    font-size: 1em;
    margin: 10px;
    padding: 0;
    width: 50%;
`;

const Composition = () => {
    const { compositionId } = useParams();

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useFetchOnParamChange(
        () => getCompositionById(compositionId),
        compositionId,
        setData,
        setIsLoading,
        setError
    );
    const composition = data[0] || {};

    let content;
    if (isLoading) {
        content = (
            <CompositionContainer>
                <ScaleLoader color={stylingConstants.colours.blue1} />
            </CompositionContainer>
        );
    } else {
        console.log(composition);
        content = (
            <CompositionContainer>
                <CompositionName>{composition.name}</CompositionName>
                <CompositionArtist>
                    {composition.composer_name}
                </CompositionArtist>
                <MusicPlayer linkToSong={composition.recording_link} />
                <ScoreContainer>
                    <Publisher>
                        Published by: {composition.publisher_name}
                    </Publisher>
                    <LinkToScore linkToScore={composition.score_link} />
                </ScoreContainer>
            </CompositionContainer>
        );
    }
    return <Container>{content}</Container>;
};
export default Composition;
