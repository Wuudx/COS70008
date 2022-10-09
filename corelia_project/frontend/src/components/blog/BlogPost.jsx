import React from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';

const BlogPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
    background: white;
    margin-bottom: ${stylingConstants.sizes.gapBetweenBlogPosts};
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 10px 10px 20px #d9d9d9, -10px -10px 20px #ffffff;
`;

const BlogPostHeading = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
`;

const BlogPostTitleAuthor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const BlogPostTitle = styled.h1`
    font-family: 'Lato-Bold';
    font-size: 1.5rem;
    margin: 0;
`;

const BlogPostAuthor = styled.h2`
    font-family: 'Lato';
    font-weight: 500;
    font-size: 0.8rem;
    color: #a0a0a0;
    margin: 2px 0;
`;

const BlogPostDate = styled.h2`
    font-family: 'Lato-Regular';
    font-size: 1rem;
    margin: 0;
`;

const BlogPostContent = styled.p`
    font-family: 'Lato-Regular';
    margin: 10px 0;
`;

const BlogPost = ({ blogPost }) => {
    const date = new Date(blogPost.date_posted);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const formattedDate = `${month} ${day}, ${year}`;

    return (
        <BlogPostContainer>
            <BlogPostHeading>
                <BlogPostTitleAuthor>
                    <BlogPostTitle>{blogPost.title}</BlogPostTitle>
                    <BlogPostAuthor>{blogPost.author_name}</BlogPostAuthor>
                </BlogPostTitleAuthor>
                <BlogPostDate>{formattedDate}</BlogPostDate>
            </BlogPostHeading>
            <BlogPostContent>{blogPost.content}</BlogPostContent>
        </BlogPostContainer>
    );
};

export default BlogPost;
