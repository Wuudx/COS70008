import { useEffect } from "react";
import { useState } from "react";

function useFetchOnPageLoad(apiFunction) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

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

        getData();
    }, []);

    return { data, isLoading, error };
}

export default useFetchOnPageLoad;
