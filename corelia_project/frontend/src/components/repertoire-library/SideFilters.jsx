import SideFilter from './SideFilter';
import styled from 'styled-components';
import { useState } from 'react';
import stylingConstants from '../../utils/styling';
import React from 'react';

const Ul = styled.ul`
    min-width: ${stylingConstants.sizes.sideFilterWidth};
    list-style: none;
    padding: 0;
    margin: 10px 10px 0 10px;
    display: flex;
    flex-direction: column;

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
        name: 'filter one',
        count: 340,
    },
    {
        name: 'filter two',
        count: 69,
    },
    {
        name: 'filter three',
        count: 420,
    },
];

const SideFilters = ({ filters }) => {
    // if (filters[0].name !== 'All Music') {
    //     filters.unshift({ name: 'All Music', id: 9001 });
    // }

    const [selectedFilter, setSelectedFilter] = useState('All Music');

    return (
        <Ul>
            {filters.map((filter, index) => (
                <SideFilter
                    key={index}
                    filter={filter}
                    selectedFilter={selectedFilter}
                    setSelectedFilter={setSelectedFilter}
                />
            ))}
        </Ul>
    );
};
export default SideFilters;
