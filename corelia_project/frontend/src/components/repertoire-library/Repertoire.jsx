import styled from 'styled-components';
import ReadButton from '../buttons/ReadButton';
import React from 'react';

const Song = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    max-width: 300px;
    margin: 10px 0;
`;

const SongInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;

const SongNameArtist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

const SongName = styled.p`
    font-family: 'Lato-bold';
    font-size: 1.2em;
    margin: 0;
    padding: 0;
`;

const SongArtist = styled.p`
    font-family: 'Lato-regular';
    font-size: 1em;
    margin: 0;
    padding: 0;
`;

const Repertoire = ({ composition }) => {
    const trimDescription = (description) => {
        const maxLength = 100;
        return description.length > maxLength
            ? description.substring(0, maxLength) + '...'
            : description;
    };

    const handleClick = () => {
        console.log('Clicked'); // TODO: Implement this
    };

    return (
        <Song>
            <SongInfo>
                <SongNameArtist>
                    <SongName>{composition.name}</SongName>
                    <SongArtist>{composition.composer}</SongArtist>
                </SongNameArtist>
            </SongInfo>
            <ReadButton onClick={handleClick} />
        </Song>
    );
};
export default Repertoire;
