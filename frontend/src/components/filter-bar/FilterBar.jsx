import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";
import FilterDropdown from "./FilterDropdown";
import FilterLetters from "./FilterLetters";

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1em;
    padding: 0;
    margin-top: 0;
`;

const InnerFlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${stylingConstants.colours.blue2Percent50};
    width: 100%;
    min-height: 2em;
    flex-wrap: wrap;
`;

const FilterBar = () => {
    // I don't think we need this anymore, but I'll leave it here for now.s
    // const searchQuery = useSearchQuery("q");
    // if (!searchQuery) {
    //     return;
    // }
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
