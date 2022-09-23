import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import MonthFilters from "./MonthFilters";
import PostsContainer from "./PostsContainer";

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const InvisibleFlexItem = styled.div`
    // Same width as month filter so that posts are centered in middle of page.
    width: 20%;
    margin-right: ${stylingConstants.sizes.leftRightMargin};
`;

const Blog = () => {
    return (
        <FlexContainer>
            <MonthFilters />
            <PostsContainer />
            <InvisibleFlexItem></InvisibleFlexItem>
        </FlexContainer>
    );
};
export default Blog;
