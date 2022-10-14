import React from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import getFeaturedComposers from "../../../api/featured-composers";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import HomeContainer from "../../../shared-styled-components/HomeContainer";
import stylingConstants from "../../../utils/styling";
import FeaturedComposer from "./FeaturedComposer";

// This is assigns a div to a reusuable component called "FeaturedComposersContainer" which has the styles defined
// below.
const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const FeaturedComposers = () => {
    const [data, isLoading, error] = useFetchOnPageLoad(getFeaturedComposers);

    let featuredComposers;
    if (isLoading) {
        featuredComposers = (
            <ScaleLoader color={stylingConstants.colours.blue1} />
        );
    } else if (error) {
        featuredComposers = <div>{error.message}</div>;
    } else {
        featuredComposers = data.map((featuredComposer, index) => (
            <FeaturedComposer key={index} featuredComposer={featuredComposer} />
        ));
    }

    return (
        <HomeContainer>
            <h2>Featured Composers</h2>
            <FlexContainer>{featuredComposers}</FlexContainer>
        </HomeContainer>
    );
};

export default FeaturedComposers;
