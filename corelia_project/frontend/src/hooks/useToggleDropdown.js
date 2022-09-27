import { useEffect, useState } from "react";

// TODO: Close all dropdowns on page load.
function useToggleDropdown(exploreRepDropdownRef, getInvolvedDropdownRef) {
    const [isExploreRepDropdownVisible, setIsExploreRepDropdownVisible] =
        useState(false);
    const [isGetInvolvedDropdownVisible, setIsGetInvolvedDropDownVisible] =
        useState(false);

    function toggleExploreRepDropdown() {
        if (isGetInvolvedDropdownVisible) {
            toggleGetInvolvedDropdown();
        }
        setIsExploreRepDropdownVisible(!isExploreRepDropdownVisible);
    }

    function toggleGetInvolvedDropdown() {
        if (isExploreRepDropdownVisible) {
            toggleExploreRepDropdown();
        }
        setIsGetInvolvedDropDownVisible(!isGetInvolvedDropdownVisible);
    }

    function toggleDropdownIfOutside(e) {
        const shouldCloseExploreRepDropdown =
            exploreRepDropdownRef.current &&
            !exploreRepDropdownRef.current.contains(e.target) &&
            isExploreRepDropdownVisible;

        const shouldCloseGetInvolvedDropdown =
            getInvolvedDropdownRef.current &&
            !getInvolvedDropdownRef.current.contains(e.target) &&
            isGetInvolvedDropdownVisible;

        if (shouldCloseExploreRepDropdown) {
            toggleExploreRepDropdown();
        } else if (shouldCloseGetInvolvedDropdown) {
            toggleGetInvolvedDropdown();
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", toggleDropdownIfOutside);

        // Callback function that runs when component unmounts. This ensures that when we remount the component later,
        // we do not have more than one event listener.
        return () =>
            window.removeEventListener("mousedown", toggleDropdownIfOutside);
    }, [isExploreRepDropdownVisible, isGetInvolvedDropdownVisible]);

    return {
        isExploreRepDropdownVisible,
        isGetInvolvedDropdownVisible,
        toggleExploreRepDropdown,
        toggleGetInvolvedDropdown,
    };
}

export default useToggleDropdown;
