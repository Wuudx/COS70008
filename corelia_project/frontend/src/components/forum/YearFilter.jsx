import React, { useEffect, useState } from "react";
import { MdError } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";

const Container = styled.div`
    width: 100%;
    div {
        margin-top: 0.5em;
    }
`;

const Input = styled.input`
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    padding: 1em;
    width: 100%;
    border: 0px;
`;

const Span = styled.span`
    color: red;
`;

const YearFilter = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const currentMonthFilter = useSearchQuery("month");
    const [yearFilter, setYearFilter] = useState("");
    const [yearFilterError, setYearFilterError] = useState(false);

    // Only allow years from 2022 to 2099.
    function checkYearValid() {
        // TODO: Fix fact that this does not amtch empty string!
        const isIntegerOrEmptyRegex = /^$|[0-9]+/;
        const isIntegerOrEmpty = isIntegerOrEmptyRegex.test(yearFilter);
        if (isIntegerOrEmpty) {
            if (yearFilter === "") {
                return true;
            } else {
                const year = parseInt(yearFilter);
                if (year >= 2022 && year <= 2099) {
                    return true;
                }
            }
        }
        return false;
    }

    useEffect(() => {
        // Do nothing if year filter is empty.
        if (!yearFilter) {
            return;
        }
        const isYearValid = checkYearValid();
        if (!isYearValid) {
            setYearFilterError(true);
        } else {
            setYearFilterError(false);
            navigate(
                `${pathname}?month=${currentMonthFilter}&year=${yearFilter}`
            );
        }
    }, [yearFilter]);

    let yearFilterErrorElement = "";
    if (yearFilterError) {
        yearFilterErrorElement = (
            <div>
                <MdError color="red" style={{ verticalAlign: "middle" }} />
                <Span>Please enter a year between 2022 and 2099</Span>
            </div>
        );
    }

    return (
        <Container>
            <Input
                type="number"
                min="2022"
                max="2099"
                step="1"
                placeholder="year..."
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
            />
            {yearFilterErrorElement}
        </Container>
    );
};

export default YearFilter;
