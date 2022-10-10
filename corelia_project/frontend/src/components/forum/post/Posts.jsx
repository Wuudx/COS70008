import styled from "styled-components";
import Post from "./Post";
import React from "react";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import { getForumPosts } from "../../../api/forum";
import ScaleLoader from "react-spinners/ScaleLoader";
import stylingConstants from "../../../utils/styling";
import LoadMoreButton from "../../buttons/LoadMoreButton";
import fetchNextPage from "../../../api/fetch-next-page";

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

    let nextPageApiEndpoint = "";

    let content;
    const isDataLoaded = "count" in data && data.count > 0;

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

    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        content = <span>{error.message}</span>;
    } else if (isDataLoaded) {
        nextPageApiEndpoint = data.next;
        content = data.results.map((post) => (
            <Post key={post.id} post={post} postContainerWidth="100%" />
        ));
    }

    return (
        <FlexContainer>
            {content}
            <LoadMoreButton width="30%" onClick={handleLoadMore} />
        </FlexContainer>
    );
};
export default Posts;
