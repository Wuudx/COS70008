import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import useFetchOnParamChange from '../../hooks/useFetchOnParamChange';
import { getCompositionById } from '../../api/compositions';
import ScaleLoader from 'react-spinners/ScaleLoader';
import stylingConstants from '../../utils/styling';
import { useState } from 'react';
import { getCompositions } from '../../api/compositions';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';

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
    margin-top: 20px;
    padding: 30px;

    min-width: 300px;
    min-height: 300px;

    border-radius: 45px;
    background: #ffffff;
    box-shadow: 20px 20px 40px #cccccc, -20px -20px 40px #ffffff;
`;

const CompositionName = styled.h1`
    font-family: 'Lato-bold';
    font-size: 1.5em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const CompositionArtist = styled.h2`
    font-family: 'Lato-regular';
    font-size: 1.2em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const CompositionYear = styled.span`
    font-family: 'Lato-regular';
    font-weight: 300;
    font-size: 1em;
    margin: 0;
    padding: 0;
`;

const CompositionInstrument = styled.div`
    font-family: 'Lato-regular';
    font-size: 1em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
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

const CompositionDetail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 10px;
    padding: 0;
    width: 100%;
`;

const BlueButton = styled.a`
    text-decoration: none;
    color: white;
    font-family: lato-bold;
    background: ${stylingConstants.colours.blue3};
    &:hover {
        background: ${stylingConstants.colours.blue4};
    }
    border-radius: 0.4em;
    padding: 0.5em;
    width: fit-content;
    height: fit-content;
`;

const CuratedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin-top: 20px;
    margin-bottom: 20px;

    min-width: 300px;

    border-radius: 45px;
    background: #ffffff;
    box-shadow: 20px 20px 40px #cccccc, -20px -20px 40px #ffffff;
`;

const CuratedTitle = styled.h1`
    font-family: 'Lato-bold';
    font-size: 1.5em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const CuratedName = styled.h1`
    font-family: 'Lato-bold';
    font-size: 1.2em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const CuratedArtist = styled.h2`
    font-family: 'Lato-regular';
    font-size: 0.8em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const WatchListen = () => {
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

    const [allCompositions, allCompositionsLoading, allCompositionsError] =
        useFetchOnPageLoad(getCompositions);

    const nextComposition =
        allCompositions[Math.floor(Math.random() * allCompositions.length)];

    console.log(nextComposition);

    let content;
    if (isLoading) {
        content = (
            <CompositionContainer>
                <ScaleLoader color={stylingConstants.colours.blue1} />
            </CompositionContainer>
        );
    } else {
        const year =
            composition.year !== 0 ? (
                <CompositionYear>- {composition.year}</CompositionYear>
            ) : (
                ''
            );
        const instruments =
            composition.instrument_detail !== '' ? (
                <CompositionInstrument>
                    Consisting of: {composition.instrument_detail}
                </CompositionInstrument>
            ) : (
                ''
            );
        const recording =
            composition.recording_link !== '' ? (
                <CompositionDetail>
                    Watch / Listen to the recording:{' '}
                    <BlueButton href={composition.recording_link}>
                        HERE
                    </BlueButton>
                </CompositionDetail>
            ) : (
                ''
            );
        const publisher =
            composition.publisher_name !== '' ? (
                <CompositionDetail>
                    <Publisher>
                        Published by: {composition.publisher_name}
                    </Publisher>
                    <BlueButton href={composition.score_link}>SCORE</BlueButton>
                </CompositionDetail>
            ) : (
                ''
            );

        content = (
            <CompositionContainer>
                <CompositionName>{composition.name}</CompositionName>
                <CompositionArtist>
                    {composition.composer_name} {year}
                </CompositionArtist>
                {instruments}
                {recording}
                {publisher}
                {/* <ScoreContainer>
                    <Publisher>
                        Published by: {composition.publisher_name}
                    </Publisher>
                    <LinkToScore linkToScore={composition.score_link} />
                </ScoreContainer> */}
            </CompositionContainer>
        );
    }

    let curated;
    if (allCompositionsLoading) {
        curated = (
            <CuratedContainer>
                <ScaleLoader color={stylingConstants.colours.blue1} />
            </CuratedContainer>
        );
    } else if (nextComposition) {
        curated = (
            <CuratedContainer>
                <CuratedTitle>If you liked this song, check out: </CuratedTitle>
                <CuratedName>{nextComposition.name}</CuratedName>
                <CuratedArtist>
                    {nextComposition.first_name + nextComposition.last_name}
                </CuratedArtist>
                <BlueButton href={`/watch-listen/${nextComposition.id}`}>
                    CLICK HERE
                </BlueButton>
            </CuratedContainer>
        );
    }

    return (
        <Container>
            {content}
            {curated}
        </Container>
    );
};
export default WatchListen;
