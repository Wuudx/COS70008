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

const BlogPosts = ({ blogPosts }) => {
    return (
        <BlogPostsContainer>
            {blogPosts.map((blogPost, index) => (
                <BlogPost key={index} blogPost={blogPost} />
            ))}
        </BlogPostsContainer>
    );
};
export default BlogPosts;
