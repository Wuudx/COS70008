import { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeaturedComposer from './FeaturedComposer';
import React from 'react';
import stylingConstants from '../../../utils/styling';
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
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-right: ${stylingConstants.sizes.leftRightMargin};
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
                        `This is a HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <Container>
            <h3>Featured Composers</h3>
            <FlexContainer>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data &&
                    data.map((featuredComposer) => (
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
