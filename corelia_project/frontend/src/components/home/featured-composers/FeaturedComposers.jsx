import styled from 'styled-components';
import FeaturedComposer from './FeaturedComposer';
import React from 'react';
import useFetchOnPageLoad from '../../../hooks/useFetchOnPageLoad';
import getFeaturedComposers from '../../../api/featured-composers';
import HomeContainer from '../../../shared-styled-components/HomeContainer';

// This is assigns a div to a reusuable component called "FeaturedComposersContainer" which has the styles defined
// below.
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const FeaturedComposers = () => {
    const { data, isLoading, error } = useFetchOnPageLoad(getFeaturedComposers);

    console.log(data, isLoading, error);

    let featuredComposers;
    if (isLoading) {
        featuredComposers = <div>Loading...</div>;
    } else if (error) {
        console.log(error);
        featuredComposers = <div>{error.message}</div>;
    } else {
        featuredComposers = data.map((featuredComposer, index) => (
            <FeaturedComposer key={index} featuredComposer={featuredComposer} />
        ));
    }

    return (
        <HomeContainer>
            <h3>Featured Composers</h3>
            <FlexContainer>{featuredComposers}</FlexContainer>
        </HomeContainer>
    );
};

export default FeaturedComposers;
