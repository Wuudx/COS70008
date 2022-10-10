async function fetchNextPage(
    nextPageApiEndpoint,
    fetchFunction,
    currentData,
    setData,
    setIsLoading,
    setError
) {
    if (!nextPageApiEndpoint) {
        return;
    }
    setIsLoading(true);
    try {
        const json = await fetchFunction(nextPageApiEndpoint);
        const currentResults = currentData.results;
        const addedResults = json.results;
        const newData = {
            ...json,
            results: [...currentResults, ...addedResults],
        };
        setData(newData);
    } catch (error) {
        setError(error);
    } finally {
        setIsLoading(false);
    }
}

export default fetchNextPage;
