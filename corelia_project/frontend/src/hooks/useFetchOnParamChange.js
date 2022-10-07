import { useEffect } from "react";

function useFetchOnParamChange(
    apiFunction,
    param,
    setData,
    setIsLoading,
    setError
) {
    useEffect(() => {
        console.log("made it");
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
    }, [param]);
}

export default useFetchOnParamChange;
