import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FilterBar from "../filter-bar/FilterBar";

// TODO: Layout this page with flex box.
const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const DiscoverComposers = () => {
    return (
        <FlexContainer>
            <FilterBar initialSearchType={"A-Z"} />
        </FlexContainer>
    );
};

export default DiscoverComposers;
