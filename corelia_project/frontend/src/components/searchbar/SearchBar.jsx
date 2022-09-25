import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${stylingConstants.sizes.searchBarHeight};
`;

const SearchBarForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const SearchBar = () => {
    const currentSearchQuery = useSearchQuery("q");
    const [searchQuery, setSearchQuery] = useState(currentSearchQuery || "");
    const navigate = useNavigate();

    // Note that input in react is sanitised by default (I think, TODO: follow up on this.)
    function handleSearch(e) {
        e.preventDefault(); // Prevent default form behaviour.
        navigate(`discover-composers/search?q=${searchQuery}`);
    }

    function handleInput(e) {
        setSearchQuery(e.target.value);
    }

    return (
        <FlexContainer>
            <SearchBarForm onSubmit={handleSearch}>
                <SearchInput
                    searchQuery={searchQuery}
                    handleInput={handleInput}
                />
                <SearchButton />
            </SearchBarForm>
        </FlexContainer>
    );
};

export default SearchBar;
