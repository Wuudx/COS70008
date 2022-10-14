import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSearchQuery from "../../hooks/useSearchQuery";

const YearFilter = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const currentMonthFilter = useSearchQuery("month");
    const [yearFilter, setYearFilter] = useState("2022");
    const [errorMessage, setErrorMessage] = useState("");

    // Only allow years from 2022 to 2099.
    function checkYearValid() {
        const regex = /(20)[2-9]{1}[0-9]{1}/;
        return regex.test(yearFilter);
    }

    useEffect(() => {
        const isYearValid = checkYearValid();
        if (!isYearValid) {
            setErrorMessage("Please enter a year between 2022 and 2099.");
        } else {
            setErrorMessage("");
            navigate(
                `${pathname}?month=${currentMonthFilter}&year=${yearFilter}`
            );
        }
    }, [yearFilter]);

    return (
        <div>
            <input
                type="number"
                min="2022"
                max="2099"
                step="1"
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default YearFilter;
