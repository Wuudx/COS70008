import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import React from "react";

const Li = styled.li`
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) =>
        props.isSelected ? stylingConstants.colours.blue2Percent100 : "none"};
    color: ${(props) => (props.isSelected ? "white" : "black")};
    cursor: pointer;
`;

const Filter = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: "Lato-bold";
    font-size: 0.8em;
`;

const Count = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: "Lato-bold";
    padding: 2px 8px;

    font-size: 0.75em;
    min-width: 50px;

    border-radius: 4px;

    background-color: ${(props) =>
        props.isSelected ? "white" : stylingConstants.colours.blue2Percent100};
    color: ${(props) =>
        props.isSelected ? stylingConstants.colours.blue2Percent100 : "white"};
`;

// TODO: Make the count bubble show up on the right side of the filter

const SideFilter = ({ filter, count, selectedFilter, setSelectedFilter }) => {
    const handleClick = () => {
        setSelectedFilter(filter);
    };

    const isSelected = filter === selectedFilter;

    return (
        <Li isSelected={isSelected} onClick={handleClick}>
            <Filter>{filter}</Filter>
            <Count isSelected={isSelected}>{count}</Count>
        </Li>
    );
};
export default SideFilter;