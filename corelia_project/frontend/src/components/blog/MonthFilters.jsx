import { useState } from "react";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";
import MonthFilter from "./MonthFilter";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    height: fit-content;
`;

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const MonthFilters = () => {
    const currentMonthFilter = useSearchQuery("month");
    const [focusedMonth, setFocusedMonth] = useState(currentMonthFilter || "");

    return (
        <FlexContainer>
            {MONTHS.map((month) => (
                <MonthFilter
                    key={month}
                    month={month}
                    focusedMonth={focusedMonth}
                    setFocusedMonth={setFocusedMonth}
                />
            ))}
        </FlexContainer>
    );
};
export default MonthFilters;
