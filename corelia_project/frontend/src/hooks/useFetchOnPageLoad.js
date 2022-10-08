import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function useFetchOnPageLoad(apiFunction) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { search } = useLocation();
    console.log(search);

    // Function defined inside use effect callback because of race conditions.
    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                const json = await apiFunction();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }
        // So if user refreshes the page with query params in url, it will not fetch (useFetchOnParamChange handles this).
        if (!search) {
            getData();
        }
    }, []);

    return { data, isLoading, error, setData, setIsLoading, setError };
}

export default useFetchOnPageLoad;
