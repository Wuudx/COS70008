import { useLocation } from "react-router-dom";

// Extracts the parameter of the given query parameter name in url.
const useSearchQuery = (queryParamName) => {
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const query = urlSearchParams.get(queryParamName);
    return query;
};

export default useSearchQuery;
