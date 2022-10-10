import styled from "styled-components";
import Post from "./Post";
import React from "react";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import { getAllForumPosts } from "../../../api/forum";
import ScaleLoader from "react-spinners/ScaleLoader";
import stylingConstants from "../../../utils/styling";
import LoadMoreButton from "../../buttons/LoadMoreButton";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    align-items: center;
`;

const Posts = () => {
    const [data, isLoading, error] = useFetchOnPageLoad(getAllForumPosts);

    let content;
    const isDataLoaded = "count" in data && data.count > 0;

    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        content = <span>{error.message}</span>;
    } else if (isDataLoaded) {
        content = data.results.map((post) => (
            <Post key={post.id} post={post} postContainerWidth="100%" />
        ));
    }

    return (
        <FlexContainer>
            {content}
            <LoadMoreButton width="30%" />
        </FlexContainer>
    );
};
export default Posts;
