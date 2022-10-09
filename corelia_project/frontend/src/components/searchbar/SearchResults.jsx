import React from 'react';
import styled from 'styled-components';
import SearchResult from './SearchResult';

const ResultsContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    list-style: none;
    margin: auto;
    padding: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 1em;
    background-color: white;
`;

const SearchResults = ({ results }) => {
    return (
        <ResultsContainer>
            {results.map((result) => (
                <SearchResult result={result} />
            ))}
        </ResultsContainer>
    );
};
export default SearchResults;
