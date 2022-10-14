import React, { useState } from "react";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";
import MonthFilter from "./MonthFilter";
import YearFilter from "./YearFilter";

// TODO: Maybe add margin left and margin right (from invisible flex item) to parent flex container. This should have the
// same effect.
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    height: fit-content;
`;

const OuterFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    align-items: center;
    gap: 1em;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    h2 {
        margin: 0px;
    }
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

const Filters = () => {
    const currentMonthFilter = useSearchQuery("month");
    const [focusedMonth, setFocusedMonth] = useState(currentMonthFilter || "");

    return (
        <OuterFlexContainer>
            <h2>Filter By: </h2>
            <YearFilter />
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
        </OuterFlexContainer>
    );
};
export default Filters;
