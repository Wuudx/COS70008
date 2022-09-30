import { useRef } from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FaFolderOpen } from 'react-icons/fa';
import FilterBarDropdown from './FilterBarDropdown';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import React from 'react';

const Container = styled.div``;

const DropDownLabel = styled.p`
    font-size: 1em;
    font-family: ${stylingConstants.fonts.searchBar};
    color: white;
    user-select: none;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const VerticalLine = styled.div`
    height: 3em;
    width: 0.5px;
    background-color: white;
    margin-left: 0.5em;
    margin-right: 2em;
`;

const FilterDropdown = ({ searchType, changeSearchType }) => {
    const dropdownRef = useRef(null);
    const [isOpen, toggleIsOpen] = useDetectOutsideClick(dropdownRef, false);
    const toggleDropdown = () => toggleIsOpen(!isOpen);

    const handleSearchFilterClick = (newSearchType) => {
        changeSearchType(newSearchType);
        toggleDropdown();
    };

    return (
        <Container ref={dropdownRef}>
            <FilterContainer onClick={toggleDropdown}>
                <FaFolderOpen
                    color='white'
                    size='2.25em'
                    style={{
                        marginRight: '0.5em',
                    }}
                />
                <DropDownLabel>{searchType}</DropDownLabel>
                {isOpen ? (
                    <IoIosArrowUp
                        onClick={toggleDropdown}
                        color='white'
                        size='1em'
                        style={{
                            marginLeft: '0.5em',
                            marginRight: '0.5em',
                        }}
                    />
                ) : (
                    <IoIosArrowDown
                        onClick={toggleDropdown}
                        size='1em'
                        style={{
                            marginLeft: '0.5em',
                            marginRight: '0.5em',
                        }}
                        color='white'
                    />
                )}
                <VerticalLine />
            </FilterContainer>
            <FilterBarDropdown
                isOpen={isOpen}
                handleSearchFilterClick={handleSearchFilterClick}
            />
        </Container>
    );
};

export default FilterDropdown;
