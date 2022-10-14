import React from "react";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import Filters from "./Filters";
import PostsContainer from "./post/PostsContainer";

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

const Forum = () => {
    return (
        <FlexContainer>
            <Filters />
            <PostsContainer />
            <InvisibleFlexItem />
        </FlexContainer>
    );
};
export default Forum;
