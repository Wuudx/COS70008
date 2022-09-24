import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const Li = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Filter = styled.div`
    width: 100%;
    margin: 0;
    padding: 10px 50px;
    border: none;
    cursor: pointer;
    font-family: "Lato-bold";
    background-color: ${(props) =>
        props.isSelected ? stylingConstants.colours.blue2Percent100 : "none"};
    color: ${(props) => (props.isSelected ? "white" : "black")};
`;

const SideFilter = ({ filter, selectedFilter, setSelectedFilter }) => {
    const handleClick = () => {
        setSelectedFilter(filter);
    };

    const isSelected = filter === selectedFilter;

    return (
        <Li>
            <Filter isSelected={isSelected} onClick={handleClick}>
                {filter}
            </Filter>
        </Li>
    );
};
export default SideFilter;
