import LoadMoreButton from '../buttons/LoadMoreButton';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import Repertoire from './Repertoire';
import React from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const Repertoires = styled.div`
    display: grid;
    justify-content: space-between;
    align-content: center;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 10px;
    width: 100%;
    margin-top: 10px;
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

const RepertoireContent = ({ compositions, handleLoadMore, hasMore }) => {
    return (
        <Container>
            <Repertoires>
                {compositions.map((composition) => (
                    <Repertoire
                        key={composition.id}
                        composition={composition}
                    />
                ))}
            </Repertoires>
            {hasMore ? <LoadMoreButton onClick={handleLoadMore} /> : ''}
        </Container>
    );
};

export default RepertoireContent;
