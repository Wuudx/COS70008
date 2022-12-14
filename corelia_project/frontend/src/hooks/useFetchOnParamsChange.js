// Unlike useFetchOnParamChange, this hook allows us to input multiple parameters.
import { useEffect } from "react";

function useFetchOnParamsChange(
    apiFunction,
    params,
    setData,
    setIsLoading,
    setError
) {
    useEffect(() => {
        if (!params[0] && !params[1]) {
            return;
        }
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
    }, params);
}

export default useFetchOnParamsChange;
