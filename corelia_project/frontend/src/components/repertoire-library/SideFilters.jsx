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

const SideFilters = ({
    filters,
    isLoading,
    selectedFilter,
    setSelectedFilter,
}) => {
    console.log('filters', filters);
    if (filters.length !== 0) {
        const allMusicFilter = {
            id: 'All',
            firstName: 'All',
            lastName: 'Compositions',
        };
        if (filters[0].id !== allMusicFilter.id) {
            filters.unshift(allMusicFilter);
        }

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
    } else {
        return null;
    }
};
export default SideFilters;
