import useSearchQuery from "../../hooks/useSearchQuery";
import React from "react";

const SearchResults = () => {
    const searchQuery = useSearchQuery("q");
    if (!searchQuery) {
        return;
    }
    return <div>SearchResults</div>;
};

export default SearchResults;
