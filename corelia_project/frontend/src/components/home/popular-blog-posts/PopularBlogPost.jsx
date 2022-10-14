import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";

const Container = styled.div`
    display: flex;
    gap: 1em;
`;

const FlexContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 30%;
`;

const BLOG_PREVIEW_CHAR_LENGTH = 100;

const PopularBlogPost = ({ popularBlogPost }) => {
    console.log(popularBlogPost);
    const blogPreview = popularBlogPost.content.slice(
        0,
        BLOG_PREVIEW_CHAR_LENGTH
    );
    let blogPreviewElement;
    if (popularBlogPost.content.length > BLOG_PREVIEW_CHAR_LENGTH) {
        blogPreviewElement = <p>{blogPreview}...</p>;
    } else {
        blogPreviewElement = <p>{blogPreview}</p>;
    }

    return (
        <Container>
            <FlexContainer>
                <RoundedImage
                    src={popularBlogPost.user_image}
                    alt="Profile Picture"
                    width="175px"
                    height="175px"
                />
                <Link to={`/blogs/${popularBlogPost.title}/`}>
                    {blogPreviewElement}
                </Link>
            </FlexContainer>
        </Container>
    );
};

export default PopularBlogPost;
