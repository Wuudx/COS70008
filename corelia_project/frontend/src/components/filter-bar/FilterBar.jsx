import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";
import FilterDropdown from "./FilterDropdown";
import FilterLetters from "./FilterLetters";
import { useState } from "react";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1em;
    padding: 0;
    margin-top: 0;
`;

const InnerFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${stylingConstants.colours.blue1Percent100};
    width: 100%;
    min-height: 2em;
    flex-wrap: wrap;
`;

const FilterBar = ( {initialSearchType} ) => {
    // I don't think we need this anymore, but I'll leave it here for now.
    // const searchQuery = useSearchQuery("q");
    // if (!searchQuery) {
    //     return;
    // }

    const [searchType, setSearchType] = useState(initialSearchType ?? "A-Z");
    const changeSearchType = (newSearchType) => setSearchType(newSearchType);

    return (
        <FlexContainer>
            <InnerFlexContainer>
                <FilterDropdown searchType={searchType} changeSearchType={changeSearchType} />
                <FilterLetters />
            </InnerFlexContainer>
        </FlexContainer>
    );
};

export default FilterBar;
