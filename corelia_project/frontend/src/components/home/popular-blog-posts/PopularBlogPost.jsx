import { Link } from "react-router-dom";
import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    gap: 1em;
    width: 30%;
    flex-shrink: 0;
`;

const BLOG_PREVIEW_CHAR_LENGTH = 100;

const PopularBlogPost = ({ popularBlogPost }) => {
    const blogPreview = popularBlogPost.preview.slice(
        0,
        BLOG_PREVIEW_CHAR_LENGTH
    );
    let blogPreviewElement;
    if (popularBlogPost.preview.length > BLOG_PREVIEW_CHAR_LENGTH) {
        blogPreviewElement = <p>{blogPreview}...</p>;
    } else {
        blogPreviewElement = <p>{blogPreview}</p>;
    }

    return (
        <FlexContainer>
            <RoundedImage
                src={popularBlogPost.profilePicture}
                alt="Profile Picture"
            />
            <Link to={`/blogs/${popularBlogPost.title}/`}>
                {blogPreviewElement}
            </Link>
        </FlexContainer>
    );
};

export default PopularBlogPost;
