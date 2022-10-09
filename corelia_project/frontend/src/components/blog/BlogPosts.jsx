import React from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';

const BlogPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-right: ${stylingConstants.sizes.leftRightMargin};
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    height: fit-content;
`;

const BlogPosts = () => {
    return (
        <BlogPostsContainer>
            <div>yes</div>
        </BlogPostsContainer>
    );
};
export default BlogPosts;
