import { useRef } from 'react';
import FolderIcon from '../../assets/icons/folder-icon.png';
import styled from "styled-components";
import stylingConstants from '../../utils/styling';
import { IoIosArrowDown } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";
import FilterBarDropdown from './FilterBarDropdown';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

const Container = styled.div`
`;

const DropDownLabel = styled.p`
    font-size: 1em;
    font-family: ${stylingConstants.fonts.searchBar};
    color: white;
`;

const FilterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 120px;
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
                    color="white"
                    size="2.25em"
                    style={{
                        marginRight: "0.5em",
                    }}
                />
                <DropDownLabel>{searchType}</DropDownLabel>
                <IoIosArrowDown
                    size="1em"
                    style={{ 
                        marginLeft: "0.5em",
                        marginRight: "0.5em", 
                    }}
                    color="white"
                />                
            </FilterContainer>
            <FilterBarDropdown isOpen={isOpen} handleSearchFilterClick={handleSearchFilterClick} />
        </Container>
    );
};

export default FilterDropdown;
