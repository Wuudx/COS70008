import { useState, useEffect } from "react";
import styled from "styled-components";
import FeaturedComposer from "./FeaturedComposer";
import React from "react";
// This is assigns a div to a reusuable component called "FeaturedComposersContainer" which has the styles defined
// below.
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const Container = styled.div`
    border: 1px solid black;
    padding: 1em;
    margin-top: 2em;
`;

const FeaturedComposers = () => {
    // This is just mock data. Real data will be loaded from api.
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8000/api/featured/`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `This is a HTTP error: The status is ${response.status}`);
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null)
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    
        /*
        {
            id: 1,
            name: "Anne Smith",
            description: "Lorem Ipsur Delta",
            image: "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 2,
            name: "Samantha Simpson",
            description: "Lorem Ipsur Delta",
            image: "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 3,
            name: "Jennifer Brown",
            description: "Lorem Ipsur Delta",
            image: "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
    ]);
    */
    return (
        <Container>
            <h3>Featured Composers</h3>
            <FlexContainer>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data && data.map((featuredComposer) => (
                    <FeaturedComposer
                        key={featuredComposer.id}
                        featuredComposer={featuredComposer}
                    />
                ))}
            </FlexContainer>
        </Container>
    );
};

export default FeaturedComposers;
