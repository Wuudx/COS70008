import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import React from 'react';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import { getComposerCompositions } from '../../api/composers';

const Li = styled.li`
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) =>
        props.isSelected ? stylingConstants.colours.blue2Percent100 : 'none'};
    color: ${(props) => (props.isSelected ? 'white' : 'black')};
    cursor: pointer;
`;

const Filter = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    cursor: pointer;
    font-family: 'Lato-bold';
    font-size: 0.8em;
`;

const Count = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Lato-bold';
    padding: 2px 8px;

    font-size: 0.75em;
    min-width: 50px;

    border-radius: 4px;

    background-color: ${(props) =>
        props.isSelected ? 'white' : stylingConstants.colours.blue2Percent100};
    color: ${(props) =>
        props.isSelected ? stylingConstants.colours.blue2Percent100 : 'white'};
`;

// TODO: Make the count bubble show up on the right side of the filter

const SideFilter = ({ filter, selectedFilter, handleFilterChange }) => {
    filter = JSON.parse(filter);

    const filterName = filter.first_name + ' ' + filter.last_name;

    const { data, isLoading, error } = useFetchOnPageLoad(() =>
        getComposerCompositions(filter.id)
    );

    const handleClick = () => {
        handleFilterChange(filter.id);
    };

    const isSelected = filter.id === selectedFilter;

    return (
        <Li isSelected={isSelected} onClick={handleClick}>
            <Filter>{filterName}</Filter>
            <Count isSelected={isSelected}>
                {!isLoading && !error ? data.count : '-'}
            </Count>
        </Li>
    );
};
export default SideFilter;
