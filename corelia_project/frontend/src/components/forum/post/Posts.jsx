import React from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import fetchNextPage from "../../../api/fetch-next-page";
import { getForumPosts } from "../../../api/forum";
import stylingConstants from "../../../utils/styling";
import LoadMoreButton from "../../buttons/LoadMoreButton";
import NoContentFound from "../NoContentFound";
import Post from "./Post";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
`;

const Posts = ({
    data,
    isLoading,
    error,
    setData,
    setIsLoading,
    setError,
    deletePostFrontend,
    editPostFrontend,
}) => {
    console.log(data);
    let nextPageApiEndpoint = "";

    function handleLoadMore() {
        fetchNextPage(
            nextPageApiEndpoint,
            () => getForumPosts(nextPageApiEndpoint),
            data,
            setData,
            setIsLoading,
            setError
        );
    }

    let loadMoreButton;
    let content;
    const isDataLoaded = "count" in data && data.count > 0;
    if (isLoading) {
        loadMoreButton = <ScaleLoader color={stylingConstants.colours.blue1} />;
        if (isDataLoaded) {
            // Loading next page, so we still render what has already been loaded from api.
            content = data.results.map((post) => (
                <Post key={post.id} post={post} postContainerWidth="100%" />
            ));
        }
    } else if (error) {
        if (
            error.message ===
            `Unexpected token '<', "<!DOCTYPE "... is not valid JSON`
        ) {
            content = <NoContentFound message="No posts found" />;
        } else {
            toast.error(error.message);
        }
    } else if (isDataLoaded) {
        nextPageApiEndpoint = data.next;
        if (!nextPageApiEndpoint) {
            loadMoreButton = "";
        } else {
            loadMoreButton = (
                <LoadMoreButton width="30%" onClick={handleLoadMore} />
            );
        }
        content = data.results.map((post) => (
            <Post
                key={post.id}
                post={post}
                postContainerWidth="100%"
                deletePostFrontend={deletePostFrontend}
                editPostFrontend={editPostFrontend}
            />
        ));
    } else if ("count" in data && data.count === 0) {
        content = <NoContentFound message="No posts found" />;
    }

    return (
        <FlexContainer>
            {content}
            {loadMoreButton}
        </FlexContainer>
    );
};
export default Posts;
