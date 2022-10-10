import styled from "styled-components";
import Post from "./Post";
import React from "react";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import { getForumPosts } from "../../../api/forum";
import ScaleLoader from "react-spinners/ScaleLoader";
import stylingConstants from "../../../utils/styling";
import LoadMoreButton from "../../buttons/LoadMoreButton";
import fetchNextPage from "../../../api/fetch-next-page";
import { useState } from "react";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
`;

const Posts = () => {
    const [data, isLoading, error, setData, setIsLoading, setError] =
        useFetchOnPageLoad(getForumPosts);
    const [hasMore, setHasMore] = useState(true);

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
        loadMoreButton = (
            <ScaleLoader width="30%" color={stylingConstants.colours.blue1} />
        );
        if (isDataLoaded) {
            // Loading next page, so we still render what has already been loaded from api.
            content = data.results.map((post) => (
                <Post key={post.id} post={post} postContainerWidth="100%" />
            ));
        }
    } else if (error) {
        loadMoreButton = <div>{error.message}</div>;
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
            <Post key={post.id} post={post} postContainerWidth="100%" />
        ));
    }

    if (!hasMore) {
        loadMoreButton = "";
    }

    return (
        <FlexContainer>
            {content}
            {loadMoreButton}
        </FlexContainer>
    );
};
export default Posts;
