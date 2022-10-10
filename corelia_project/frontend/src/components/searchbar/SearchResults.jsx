import React from 'react';
import styled from 'styled-components';
import SearchResult from './SearchResult';
import ScaleLoader from 'react-spinners/ScaleLoader';
import stylingConstants from '../../utils/styling';

const ResultsContainer = styled.div`
    position: absolute;
    z-index: 1;
    list-style: none;
    margin: auto;
    padding: 10px;
    width: 50%;
    min-height: 100px;
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`;

const SearchResults = ({ results, isLoading }) => {
    console.log(isLoading);
    if (isLoading) {
        return (
            <ResultsContainer>
                <ScaleLoader color={stylingConstants.colours.blue1} />
            </ResultsContainer>
        );
    } else if (results.length > 0) {
        return (
            <ResultsContainer>
                {results.map((result) => (
                    <SearchResult result={result} />
                ))}
            </ResultsContainer>
        );
    } else {
        return null;
    }
};
export default SearchResults;
