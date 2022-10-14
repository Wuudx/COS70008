import React from "react";
import styled from "styled-components";
import { getForumPosts, getForumPostsByMonthAndYear } from "../../../api/forum";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import useFetchOnParamsChange from "../../../hooks/useFetchOnParamsChange";
import useSearchQuery from "../../../hooks/useSearchQuery";
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
    const monthFilter = useSearchQuery("month");
    const yearFilter = useSearchQuery("year");

    const [data, isLoading, error, setData, setIsLoading, setError] =
        useFetchOnPageLoad(getForumPosts);

    useFetchOnParamsChange(
        () => getForumPostsByMonthAndYear(monthFilter, yearFilter),
        [monthFilter, yearFilter],
        setData,
        setIsLoading,
        setError
    );

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
