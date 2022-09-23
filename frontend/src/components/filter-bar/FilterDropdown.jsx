import FolderIcon from '../../assets/icons/folder-icon.png';
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { FaFolderOpen } from "react-icons/fa";

const Image = styled.img`
    width: 35px;
    margin-right: 0.5em;
    filter: invert(100%);
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const FilterDropdown = () => {
    return (
        <Container>
            <FaFolderOpen
                color="white"
                size="2.25em"
                style={{
                    marginRight: "0.5em",
                }}
            />
            <p>Filter by</p>
            <IoIosArrowDown
                size="1em"
                style={{ 
                    marginLeft: "0.5em",
                    marginRight: "0.5em", 
                }}
                color="white"
            />
        </Container>
    );
};

export default FilterDropdown;
