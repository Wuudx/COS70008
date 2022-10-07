import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FilterBar from "../filter-bar/FilterBar";
import React from "react";
import useSearchQuery from "../../hooks/useSearchQuery";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import { filterComposersByLetter, getComposers } from "../../api/composers";
import SearchResultsContainer from "./SearchResultsContainer";
import useFetchOnParamChange from "../../hooks/useFetchOnParamChange";
import LoadMoreButton from "../buttons/LoadMoreButton";

// TODO: Layout this page with flex box.
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const DiscoverComposers = () => {
    const searchQuery = useSearchQuery("q");
    const filterLetter = useSearchQuery("letter");
    const { data, isLoading, error, setData, setIsLoading, setError } =
        useFetchOnPageLoad(getComposers);
    console.log(data);
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
    } else if (data.count && data.count > 0) {
        composers = (
            <>
                <SearchResultsContainer composers={data.results} />
                <LoadMoreButton />
            </>
        );
    }

    return (
        <FlexContainer>
            <FilterBar initialSearchType={"A-Z"} />
            {composers}
        </FlexContainer>
    );
};

export default DiscoverComposers;
