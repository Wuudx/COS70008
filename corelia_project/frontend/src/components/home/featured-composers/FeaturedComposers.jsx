import { useState, useEffect } from "react";
import styled from "styled-components";
import FeaturedComposer from "./FeaturedComposer";
import React from "react";
import stylingConstants from "../../../utils/styling";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import getFeaturedComposers from "../../../api/featured-composers";

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
    const { data, isLoading, error } = useFetchOnPageLoad(getFeaturedComposers);

    let featuredComposers;
    if (isLoading) {
        featuredComposers = <div>Loading...</div>;
    } else if (error) {
        console.log(error);
        featuredComposers = <div>{error.message}</div>;
    } else {
        featuredComposers = data.map((featuredComposer) => (
            <FeaturedComposer
                key={featuredComposer.id}
                featuredComposer={featuredComposer}
            />
        ));
    }

    return (
        <Container>
            <h3>Featured Composers</h3>
            <FlexContainer>{featuredComposers}</FlexContainer>
        </Container>
    );
};

export default FeaturedComposers;
