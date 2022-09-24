import SideFilter from "./SideFilter";
import styled from "styled-components";
import { useState } from "react";
import stylingConstants from "../../utils/styling";

const Ul = styled.ul`
    width: ${stylingConstants.sizes.sideFilterWidth};
    list-style: none;
    padding: 0;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    margin-top: 10px;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    background-color: white;

    li:first-child {
        border-top-left-radius: ${stylingConstants.sizes.containerBorderRadius};
        border-top-right-radius: ${stylingConstants.sizes
            .containerBorderRadius};
    }

    li:last-child {
        border-bottom-left-radius: ${stylingConstants.sizes
            .containerBorderRadius};
        border-bottom-right-radius: ${stylingConstants.sizes
            .containerBorderRadius};
    }
`;

// Remove this for final version - Testing data until integration with API
const filters = [
    {
        name: "filter one",
        count: 340,
    },
    {
        name: "filter two",
        count: 69,
    },
    {
        name: "filter three",
        count: 420,
    },
];

const SideFilters = () => {
    if (filters[0].name !== "All") {
        filters.unshift({ name: "All", count: 9001 });
    }

    const [selectedFilter, setSelectedFilter] = useState("All");

    return (
        <Ul>
            {filters.map((filter) => (
                <SideFilter
                    key={filter.name}
                    filter={filter.name}
                    count={filter.count}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
            ))}
        </Ul>
    );
};
export default SideFilters;
