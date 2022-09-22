import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import MonthFilters from "./MonthFilters";
import PostsContainer from "./PostsContainer";

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const Blog = () => {
    return (
        <FlexContainer>
            <MonthFilters />
            <PostsContainer />
        </FlexContainer>
    );
};
export default Blog;
