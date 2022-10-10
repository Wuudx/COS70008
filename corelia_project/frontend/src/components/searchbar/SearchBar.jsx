import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSearchQuery from '../../hooks/useSearchQuery';
import stylingConstants from '../../utils/styling';
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import React from 'react';
import SearchResults from './SearchResults';
import useFetchOnSearchChange from '../../hooks/useFetchOnSearchChange';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const SearchContainer = styled.div``;

const SearchBarForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
`;

const SearchResultContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: white;
    align-items: center;
`;

const SearchResultsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const SearchBar = () => {
    const resultsRef = useRef(null);
    const [isOpen, setisOpen] = useDetectOutsideClick(resultsRef, false);
    const currentSearchQuery = useSearchQuery('q');
    const [searchQuery, setSearchQuery] = useState(currentSearchQuery || '');
    const navigate = useNavigate();

    const { pathname } = useLocation();

    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useFetchOnSearchChange(
        searchQuery,
        setResults,
        setIsLoading,
        setError,
        pathname
    );

    // Note that input in react is sanitised by default (I think, TODO: follow up on this.)
    function handleSearch(e) {
        e.preventDefault();
        let newPathname = pathname.replace('/search', '');
        // This behaviour will be handled differently in future but we will keep it like this for now. Maybe have reddit
        // like beahviour where user is indicated that they are searching for discover composers with a removable flair.
        if (pathname.includes('discover-composers')) {
            navigate(`${newPathname}/search?q=${searchQuery}`);
        } else {
            navigate(`/search?q=${searchQuery}`);
        }
    }

    function handleInput(e) {
        setSearchQuery(e.target.value);
        setisOpen(e.target.value !== '');
    }

    let searchContent;
    if (error) {
        searchContent = <div>Error: {error}</div>;
    } else if (isOpen) {
        searchContent = (
            <SearchResults results={results} isLoading={isLoading} />
        );
    } else {
        searchContent = null;
    }

    return (
        <Container ref={resultsRef}>
            {/* <SearchContainer> */}
            <SearchBarForm onSubmit={handleSearch}>
                <SearchInput
                    searchQuery={searchQuery}
                    handleInput={handleInput}
                />
                <SearchButton />
            </SearchBarForm>
            <SearchResultsContainer>{searchContent}</SearchResultsContainer>
            {/* <SearchResultContainer> */}
            {/* </SearchResultContainer> */}
            {/* </SearchContainer> */}
        </Container>
    );
};

export default SearchBar;
