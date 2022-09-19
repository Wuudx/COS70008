import styled from "styled-components";
import useSearchQuery from "../../../hooks/useSearchQuery";
import stylingConstants from "../../../utils/styling";
import FilterDropdown from "./FilterDropdown";
import FilterLetters from "./FilterLetters";

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1em;
`;

const InnerFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${stylingConstants.colours.blue2Percent50};
    width: 80%;
    height: 2em;
`;

const FilterBar = () => {
    const searchQuery = useSearchQuery("q");
    if (!searchQuery) {
        return;
    }
    return (
        <FlexContainer>
            <InnerFlexContainer>
                <FilterDropdown />
                <FilterLetters />
            </InnerFlexContainer>
        </FlexContainer>
    );
};

export default FilterBar;
