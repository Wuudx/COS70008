import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";

const Button = styled.button`
    width: 100%;
    background: ${(props) =>
        props.isFocused ? stylingConstants.colours.blue2Percent100 : "none"};
    color: ${(props) => (props.isFocused ? "white" : "black")};
    border: none;
    cursor: pointer;
    font-family: lato-bold;
    font-size: 1.2em;
    &:hover {
        background: ${stylingConstants.colours.blue2Percent80};
    }
    padding: 0.5em 0em;
`;

const MonthFilter = ({ month, focusedMonth, setFocusedMonth }) => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const yearFilter = useSearchQuery("year");

    function handleClick() {
        setFocusedMonth(month);
        navigate(`${pathname}?month=${month}&year=${yearFilter}`);
    }

    const isFocused = focusedMonth === month;

    return (
        <Button isFocused={isFocused} onClick={handleClick}>
            {month}
        </Button>
    );
};
export default MonthFilter;
