import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FilterBar from "../filter-bar/FilterBar";
import React, { useEffect } from "react";
import useSearchQuery from "../../hooks/useSearchQuery";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import { filterComposersByLetter, getComposers } from "../../api/composers";
import SearchResultsContainer from "./SearchResultsContainer";
import useFetchOnParamChange from "../../hooks/useFetchOnParamChange";

// TODO: Layout this page with flex box.
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const DiscoverComposers = () => {
    const searchQuery = useSearchQuery("q");
    const filterLetter = useSearchQuery("letter");
    const { data, isLoading, error, setData, setIsLoading, setError } =
        useFetchOnPageLoad(getComposers);
    useFetchOnParamChange(
        () => filterComposersByLetter(filterLetter),
        filterLetter,
        setData,
        setIsLoading,
        setError
    );

    let composers;
    if (isLoading) {
        composers = <div>Loading...</div>;
    } else if (error) {
        composers = <div>{error.message}</div>;
    } else {
        composers = <SearchResultsContainer composers={data} />;
    }

    return (
        <>
            <FlexContainer>
                <FilterBar initialSearchType={"A-Z"} />
            </FlexContainer>
            {composers}
        </>
    );
};

export default DiscoverComposers;
