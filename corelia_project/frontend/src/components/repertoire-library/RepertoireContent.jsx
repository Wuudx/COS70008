import LoadMoreButton from '../buttons/LoadMoreButton';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import Repertoire from './Repertoire';
import React from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    width: 100%;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const LoadMoreContainer = styled.div`
    margin: 0;
    padding: 0;
`;

const songs = [
    {
        id: 1,
        name: 'song one',
        artist: 'artist one',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?',
        image: 'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',
    },
    {
        id: 2,
        name: 'song two',
        artist: 'artist two',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?',
        image: 'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',
    },
    {
        id: 3,
        name: 'song three',
        artist: 'artist three',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?',
        image: 'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',
    },
    {
        id: 4,
        name: 'song four',
        artist: 'artist four',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?',
        image: 'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',
    },
    {
        id: 5,
        name: 'song five',
        artist: 'artist five',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?',
        image: 'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',
    },
    {
        id: 6,
        name: 'song six',
        artist: 'artist six',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae totam, voluptatem optio explicabo quidem ea ipsa doloribus quasi. Accusantium quas ipsam aut! Qui voluptatem facere odio unde explicabo maxime?',
        image: 'https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg',
    },
];

const RepertoireContent = () => {
    // Change this to be the number of songs to be displayed after testing
    const [numItems, setNumItems] = useState(2); // Change this too!

    const handleLoadMore = () => {
        setNumItems(numItems + 2);
    };

    return (
        <Container>
            {songs.slice(0, numItems).map((song) => (
                <Repertoire key={song.id} song={song} />
            ))}
            {numItems !== songs.length ? (
                <LoadMoreButton onClick={handleLoadMore} />
            ) : (
                ''
            )}
        </Container>
    );
};

export default RepertoireContent;
