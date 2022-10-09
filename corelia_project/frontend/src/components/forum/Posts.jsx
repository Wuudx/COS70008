import { useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import React from "react";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import { getAllForumPosts } from "../../api/forum";
import ScaleLoader from "react-spinners/ScaleLoader";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
`;

const Posts = () => {
    const [data, isLoading, error] = useFetchOnPageLoad(getAllForumPosts);

    let content;
    if (isLoading) {
        content = <ScaleLoader />;
    } else if (error) {
        content = <FlexContainer>{error.message}</FlexContainer>;
    } else {
        content = (
            <FlexContainer>
                {data.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </FlexContainer>
        );
    }

    return content;
};
export default Posts;
