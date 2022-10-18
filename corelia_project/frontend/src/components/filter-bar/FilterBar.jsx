import React from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FilterLetters from "./FilterLetters";

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${stylingConstants.colours.blue1Percent100};
    height: 3em;
`;

const FilterBar = () => {
    return (
        <FlexContainer>
            <FilterLetters />
        </FlexContainer>
    );
};

export default FilterBar;
