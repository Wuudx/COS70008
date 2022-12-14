import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
    filterComposersByLetter,
    getComposers,
    searchComposers,
} from '../../api/composers';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import useFetchOnParamChange from '../../hooks/useFetchOnParamChange';
import useSearchQuery from '../../hooks/useSearchQuery';
import constants from '../../utils/constants';
import stylingConstants from '../../utils/styling';
import LoadMoreButton from '../buttons/LoadMoreButton';
import FilterBar from '../filter-bar/FilterBar';
import SearchResultsContainer from './SearchResultsContainer';
import ScaleLoader from 'react-spinners/ScaleLoader';
import fetchNextPage from '../../api/fetch-next-page';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const INITIAL_URL = `http://localhost:8000/api/composers?limit=${constants.DISCOVER_COMPOSERS_LIMIT}`;

// TODO: ALLOW USER TO FILTER BY LETTER AND SEARCH QUERY.
const DiscoverComposers = () => {
    const searchQuery = useSearchQuery('q');
    const filterLetter = useSearchQuery('letter');
    const [data, isLoading, error, setData, setIsLoading, setError] =
        useFetchOnPageLoad(() => getComposers(INITIAL_URL));
    let nextPageApiEndpoint = '';
    useFetchOnParamChange(
        () => filterComposersByLetter(filterLetter),
        filterLetter,
        setData,
        setIsLoading,
        setError
    );
    useFetchOnParamChange(
        () => searchComposers(searchQuery),
        searchQuery,
        setData,
        setIsLoading,
        setError
    );

    function handleLoadMore() {
        fetchNextPage(
            nextPageApiEndpoint,
            () => getComposers(nextPageApiEndpoint),
            data,
            setData,
            setIsLoading,
            setError
        );
    }

    // Fetch composers if user goes back to /discover-composers from querying.
    useEffect(() => {
        async function getAllComposers() {
            setIsLoading(true);
            try {
                const json = await getComposers(INITIAL_URL);
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        if (!searchQuery && !filterLetter) {
            getAllComposers();
        }
    }, [searchQuery, filterLetter]);

    const isDataLoaded = 'count' in data && data.count >= 0;

    let composers = '';
    let loadMoreButton = '';
    if (isLoading) {
        loadMoreButton = <ScaleLoader color={stylingConstants.colours.blue1} />;
        if (isDataLoaded) {
            // Loading next page, so we still render what has already been loaded from api.
            composers = <SearchResultsContainer composers={data.results} />;
        }
    } else if (error) {
        loadMoreButton = <div>{error.message}</div>;
    } else if (isDataLoaded) {
        nextPageApiEndpoint = data.next;
        if (!nextPageApiEndpoint) {
            loadMoreButton = '';
        } else {
            loadMoreButton = <LoadMoreButton onClick={handleLoadMore} />;
        }
        composers = <SearchResultsContainer composers={data.results} />;
    }

    return (
        <FlexContainer>
            <FilterBar initialSearchType={'A-Z'} />
            {composers}
            {loadMoreButton}
        </FlexContainer>
    );
};

export default DiscoverComposers;
