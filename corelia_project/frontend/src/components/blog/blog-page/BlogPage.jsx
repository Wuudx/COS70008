import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetchOnParamChange from '../../../hooks/useFetchOnParamChange';
import { getBlogPost } from '../../../api/blogs';
import { ScaleLoader } from 'react-spinners';
import stylingConstants from '../../../utils/styling';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    min-height: 50%;
`;

const BlogPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 45px;
    padding: 20px;
`;

const BlogHeading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
`;

const BlogTitle = styled.h1`
    font-family: 'Lato-bold';
    font-size: 1.5em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const BlogDate = styled.h2`
    font-family: 'Lato-regular';
    font-size: 1.2em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const BlogContent = styled.p`
    width: 80%;
    font-family: 'Lato-regular';
    font-size: 1em;
    margin: 10px;
    padding: 0;
`;

const BlogPage = () => {
    const { blogId } = useParams();
    const [blogPost, setBlogPost] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const blog = blogPost ? blogPost[0] : null;

    const date = blog ? new Date(blog.date_posted) : null;
    const formattedDate = date
        ? `${date.toLocaleString('default', {
              month: 'long',
          })} ${date.getDate()}, ${date.getFullYear()}`
        : null;

    useFetchOnParamChange(
        () => getBlogPost(blogId),
        blogId,
        setBlogPost,
        setIsLoading,
        setError
    );

    console.log(blog);

    let content;
    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        content = <p>There was an error loading the blog post.</p>;
    } else if (blog) {
        content = (
            <BlogPageContainer>
                <BlogHeading>
                    <BlogTitle>{blog.title}</BlogTitle>
                    <BlogDate>{formattedDate}</BlogDate>
                </BlogHeading>
                <BlogContent>{blog.content}</BlogContent>
            </BlogPageContainer>
        );
    } else {
        content = <p>There was an error loading the blog post.</p>;
    }
    return <Container>{content}</Container>;
};
export default BlogPage;
