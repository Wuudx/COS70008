import React, { useState } from "react";
import styled from "styled-components";
import { filterComposersByLetter, getComposers } from "../../api/composers";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import useFetchOnParamChange from "../../hooks/useFetchOnParamChange";
import useSearchQuery from "../../hooks/useSearchQuery";
import constants from "../../utils/constants";
import stylingConstants from "../../utils/styling";
import LoadMoreButton from "../buttons/LoadMoreButton";
import FilterBar from "../filter-bar/FilterBar";
import SearchResultsContainer from "./SearchResultsContainer";

// TODO: Layout this page with flex box.
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const INITIAL_URL = `http://localhost:8000/api/composers?limit=${constants.DISCOVER_COMPOSERS_LIMIT}`;

const DiscoverComposers = () => {
    const searchQuery = useSearchQuery("q");
    const filterLetter = useSearchQuery("letter");
    const { data, isLoading, error, setData, setIsLoading, setError } =
        useFetchOnPageLoad(() => getComposers(INITIAL_URL));
    let nextPageApiEndpoint = "";
    useFetchOnParamChange(
        () => filterComposersByLetter(filterLetter),
        filterLetter,
        setData,
        setIsLoading,
        setError
    );

    async function fetchNextPage() {
        if (!nextPageApiEndpoint) {
            // No more data left.
            return;
        }
        setIsLoading(true);
        try {
            const json = await getComposers(nextPageApiEndpoint);
            const currentResults = data.results;
            const addedResults = json.results;
            const newData = {
                ...json,
                results: [...currentResults, ...addedResults],
            };
            setData(newData);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    const isDataLoaded = "count" in data && data.count > 0;

    let composers = "";
    let loadMoreButton = "";
    if (isLoading) {
        loadMoreButton = <div>Loading...</div>;
        if (isDataLoaded) {
            // Loading next page, so we still render what has already been loaded from api.
            composers = <SearchResultsContainer composers={data.results} />;
        }
    } else if (error) {
        loadMoreButton = <div>{error.message}</div>;
    } else if (isDataLoaded) {
        nextPageApiEndpoint = data.next;
        composers = <SearchResultsContainer composers={data.results} />;
        loadMoreButton = <LoadMoreButton onClick={fetchNextPage} />;
    }

    return (
        <FlexContainer>
            <FilterBar initialSearchType={"A-Z"} />
            {composers}
            {loadMoreButton}
        </FlexContainer>
    );
};

export default DiscoverComposers;
