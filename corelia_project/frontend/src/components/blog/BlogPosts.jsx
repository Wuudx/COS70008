import React from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import BlogPost from './BlogPost';

const BlogPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 20px;
    margin-right: 20px;
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    height: fit-content;
    background: transparent;
`;

const NoPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    padding: 20px;
`;

const BlogPosts = ({ blogPosts }) => {
    let content;
    if (blogPosts.length === 0) {
        content = <NoPostsContainer>No blog posts found.</NoPostsContainer>;
    } else {
        content = blogPosts.map((blogPost, index) => (
            <BlogPost key={index} blogPost={blogPost} />
        ));
    }

    return <BlogPostsContainer>{content}</BlogPostsContainer>;
};
export default BlogPosts;
