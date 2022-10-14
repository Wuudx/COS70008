import { useEffect } from 'react';
import { searchAll } from '../api/search';

function useFetchOnSearchChange(
    searchQuery,
    setResults,
    setIsLoading,
    setError,
    pathname
) {
    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const result = await searchAll(searchQuery, pathname);
                setResults(result);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }

        getData();
    }, [searchQuery]);
}

export default useFetchOnSearchChange;
