import { useEffect, useState } from "react";

function useHandleWindowResize() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    function handleWindowResize() {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return windowWidth;
}

export default useHandleWindowResize;
