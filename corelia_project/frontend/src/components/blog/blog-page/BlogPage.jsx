import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetchOnParamChange from '../../../hooks/useFetchOnParamChange';
import useFetchOnPageLoad from '../../../hooks/useFetchOnPageLoad';
import { getBlogPost } from '../../../api/blogs';
import { getComposerById } from '../../../api/composers';
import { ScaleLoader } from 'react-spinners';
import stylingConstants from '../../../utils/styling';
import { IoIosArrowBack } from 'react-icons/io';

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

const BackButton = styled.div`
    position: relative;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    height: 40px;
    width: 100px;

    color: ${stylingConstants.colours.blue1};
    border-radius: 5px;

    &:hover {
        cursor: pointer;
        background-color: ${stylingConstants.colours.blue1};
        color: white;
    }
`;

const BlogHeading = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
`;

const BlogInformation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
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

const AuthorInformation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 10px;
    padding: 0;

    &:hover {
        cursor: pointer;
        background-color: black;
    }
`;

const AuthorName = styled.h2`
    font-family: 'Lato-regular';
    font-size: 1.2em;
    margin: 10px;
    padding: 0;
    align-self: flex-start;
`;

const AuthorImage = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 10px;
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
    const navigate = useNavigate();
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

    const handleBackClick = () => {
        navigate(-1);
    };

    console.log(blog);

    let content;
    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        content = <p>There was an error loading the blog post.</p>;
    } else if (blog) {
        const profileImage =
            blog.user_image === 'static/users/images/Default_profile_pic.png'
                ? '/' + blog.user_image
                : blog.user_image;
        content = (
            <BlogPageContainer>
                <BackButton onClick={handleBackClick}>
                    <IoIosArrowBack size='2em' />
                    Back
                </BackButton>
                <BlogHeading>
                    <BlogInformation>
                        <BlogTitle>{blog.title}</BlogTitle>
                        <BlogDate>{formattedDate}</BlogDate>
                    </BlogInformation>
                    <AuthorInformation>
                        <AuthorName>{blog.author_name}</AuthorName>
                        <AuthorImage src={profileImage} />
                    </AuthorInformation>
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
