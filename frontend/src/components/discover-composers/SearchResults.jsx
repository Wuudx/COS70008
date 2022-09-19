import useSearchQuery from "../../hooks/useSearchQuery";

const SearchResults = () => {
    const searchQuery = useSearchQuery("q");
    if (!searchQuery) {
        return;
    }
    return <div>SearchResults</div>;
};

export default SearchResults;
