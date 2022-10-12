import React from "react";
import styled from "styled-components";
import { getForumPosts } from "../../../api/forum";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import CreatePostForm from "./CreatePostForm";
import Posts from "./Posts";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-left: 4em;
    gap: 1em;
`;

const PostsContainer = () => {
    const [data, isLoading, error, setData, setIsLoading, setError] =
        useFetchOnPageLoad(getForumPosts);

    function addNewPost(newPost) {
        setData({ ...data, results: [...data.results, newPost] });
    }

    function deletePostFrontend(postId) {
        const newResults = data.results.filter((post) => post.id !== postId);
        setData({ ...data, count: data.count - 1, results: newResults });
    }

    return (
        <FlexContainer>
            <CreatePostForm addNewPost={addNewPost} />
            <Posts
                data={data}
                isLoading={isLoading}
                error={error}
                setData={setData}
                setIsLoading={setIsLoading}
                setError={setError}
                deletePostFrontend={deletePostFrontend}
            />
        </FlexContainer>
    );
};
export default PostsContainer;
