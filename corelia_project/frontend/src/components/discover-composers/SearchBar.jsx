import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1em;
`;

const SearchBar = () => {
    const searchQuery = useSearchQuery("q");
    const [composerOrSong, setComposerOrSong] = useState(
        searchQuery ? searchQuery : ""
    );
    const navigate = useNavigate();

    useEffect(() => {
        // Whenever search query changes, change the initial value of the search value.
        setComposerOrSong(searchQuery ? searchQuery : "");
    }, [searchQuery]);

    // Note that input in react is sanitised by default (I think, TODO: follow up on this.)
    function handleComposerSearch(e) {
        e.preventDefault(); // Prevent default form behaviour.
        navigate(`?q=${composerOrSong}`);
    }

    return (
        <FlexContainer>
            <form onSubmit={handleComposerSearch}>
                <input
                    type="text"
                    value={composerOrSong}
                    onChange={(e) => setComposerOrSong(e.target.value)}
                />
                <input type="submit" value="search" />
            </form>
        </FlexContainer>
    );
};

export default SearchBar;
