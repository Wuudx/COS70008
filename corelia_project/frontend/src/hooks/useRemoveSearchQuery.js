import { useLocation } from 'react-router-dom';

// Extracts the parameter of the given query parameter name in url.
const useRemoveSearchQuery = (queryParamName) => {
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    urlSearchParams.delete(queryParamName);
};

export default useRemoveSearchQuery;
