import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import MonthFilters from "./MonthFilters";
import Posts from "./Posts";

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const Blog = () => {
    return (
        <FlexContainer>
            <MonthFilters />
            <Posts />
        </FlexContainer>
    );
};
export default Blog;
