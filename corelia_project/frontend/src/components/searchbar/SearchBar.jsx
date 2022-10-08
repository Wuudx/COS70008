import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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

    const { pathname } = useLocation();

    // Note that input in react is sanitised by default (I think, TODO: follow up on this.)
    function handleSearch(e) {
        e.preventDefault();
        let newPathname = pathname.replace("/search", "");
        // This behaviour will be handled differently in future but we will keep it like this for now. Maybe have reddit
        // like beahviour where user is indicated that they are searching for discover composers with a removable flair.
        if (pathname.includes("discover-composers")) {
            navigate(`${newPathname}/search?q=${searchQuery}`);
        } else {
            navigate(`/search?q=${searchQuery}`);
        }
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
