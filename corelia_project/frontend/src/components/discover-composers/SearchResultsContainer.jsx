import { useState } from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import SearchResults from "./SearchResults";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0 ${stylingConstants.sizes.leftRightMargin};
    justify-content: center;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const SearchResultsContainer = ({ composers }) => {
    return (
        <FlexContainer>
            <SearchResults composers={composers} />
        </FlexContainer>
    );
};

export default SearchResultsContainer;
