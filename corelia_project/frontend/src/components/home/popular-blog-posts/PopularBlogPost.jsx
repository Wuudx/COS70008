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

const PopularBlogPost = ({ popularBlogPost }) => {
    return (
        <FlexContainer>
            <RoundedImage
                src={popularBlogPost.profilePicture}
                alt="Profile Picture"
            />
            <Link to={`/blogs/${popularBlogPost.title}/`}>
                <p>{popularBlogPost.preview}</p>
            </Link>
        </FlexContainer>
    );
};

export default PopularBlogPost;
