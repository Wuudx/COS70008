import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import CircularButton from "../../shared-styled-components/CircularButton";

const BackToTopButton = () => {
    // We put this in state because whenever it changes, we want to rerender.
    const [isVisible, setIsVisible] = useState(false);
    let content;

    function hasUserScrolledDown() {
        const maxHeight = document.body.scrollHeight - window.innerHeight;

        // If scrollPercentage is 0, then the user is at the top of the page. If scroll percentage is 100,
        // the user is at the bottom of the page.
        const scrollPercentage = (window.pageYOffset * 100) / maxHeight;

        return scrollPercentage > 0;
    }

    useEffect(() => {
        window.addEventListener("scroll", checkIfButtonShouldRender);

        return () =>
            window.removeEventListener("scroll", checkIfButtonShouldRender);
    }, []);

    function checkIfButtonShouldRender() {
        if (hasUserScrolledDown()) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    function goToTopOfPage() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    if (isVisible) {
        content = (
            <CircularButton onClick={goToTopOfPage}>
                <IoIosArrowUp />
            </CircularButton>
        );
    } else {
        content = "";
    }

    return content;
};
export default BackToTopButton;
