import styled from "styled-components";
import React from "react";
import Composer from "./Composer";

const GridContainer = styled.div`
    margin-top: 1em;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2em;
    @media (min-width: 320px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media (min-width: 481px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 769px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(5, 1fr);
    }
`;

const SearchResults = ({ composers }) => {
    return (
        <GridContainer>
            {composers.map((composer) => (
                <Composer key={composer.id} composer={composer} />
            ))}
        </GridContainer>
    );
};
export default SearchResults;