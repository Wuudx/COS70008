import styled from "styled-components";
import CreatePostForm from "../CreatePostForm";
import Posts from "./Posts";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 4em;
    gap: 1em;
`;

const PostsContainer = () => {
    return (
        <FlexContainer>
            <CreatePostForm />
            <Posts />
        </FlexContainer>
    );
};
export default PostsContainer;
