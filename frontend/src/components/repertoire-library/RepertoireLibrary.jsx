import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import FilterBar from "../filter-bar/FilterBar";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const RepertoireLibrary = () => {
    return (
        <FlexContainer>
            <FilterBar />
            <h1>Content goes here</h1>
        </FlexContainer>
    );
};

export default RepertoireLibrary;