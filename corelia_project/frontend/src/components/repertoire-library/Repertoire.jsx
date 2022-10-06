import styled from 'styled-components';
import ReadButton from '../buttons/ReadButton';
import React from 'react';

const Song = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 800px;
    margin: 10px 0;
`;

const SongArtwork = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 10px;
    border-radius: 4px;
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

    margin: 10px;
    padding: 5px;

    white-space: nowrap;
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

const SongDescription = styled.p`
    font-family: 'Lato-regular';
    font-size: 1em;
    margin: 0;
    padding: 0;

    margin: 10px;
    padding: 5px;
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
            <SongArtwork
                src={
                    'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg'
                }
            />
            <SongInfo>
                <SongNameArtist>
                    <SongName>{composition.name}</SongName>
                    <SongArtist>{composition.composer}</SongArtist>
                </SongNameArtist>
                <SongDescription>
                    {trimDescription(
                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?'
                    )}
                </SongDescription>
            </SongInfo>
            <ReadButton onClick={handleClick} />
        </Song>
    );
};
export default Repertoire;
