import React from "react";
import { useParams } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import styled from "styled-components";
import fetchNextPage from "../../../api/fetch-next-page";
import { getCommentsOnPost, getForumPostById } from "../../../api/forum";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import stylingConstants from "../../../utils/styling";
import LoadMoreButton from "../../buttons/LoadMoreButton";
import NoContentFound from "../NoContentFound";
import Post from "../post/Post";
import Comment from "./Comment";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 0.5em;
`;

// TODO: Add message if there are no comments on a post.
const Comments = () => {
    let nextPageApiEndpoint = "";
    const { postId } = useParams();
    const [post, postIsLoading, postError] = useFetchOnPageLoad(() =>
        getForumPostById(postId)
    );

    const [
        comments,
        commentsIsLoading,
        commentsError,
        setComments,
        setCommentsLoading,
        setCommentsError,
    ] = useFetchOnPageLoad(() => getCommentsOnPost(postId));

    function addComment(newComment) {
        setComments({
            ...comments,
            results: [...comments.results, newComment],
        });
    }

    function deleteCommentFrontend(commentId) {
        const newResults = comments.results.filter(
            (comment) => comment.id !== commentId
        );
        setComments({
            ...comments,
            count: comments.count - 1,
            results: newResults,
        });
    }

    let postElement;
    if (postIsLoading) {
        postElement = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (postError) {
        postElement = <span>{postError.message}</span>;
    } else if (post.length > 0) {
        // We add this check because initially, post is an empty array until after it loads (this is due to the fact that
        // the custom hook useFetchOnPageLoad sets data initially as an empty array.)

        // We get the first element because "post" is an array of length 1.
        const postContent = post[0];
        postElement = (
            <Post
                post={postContent}
                postContainerWidth="50%"
                addComment={addComment}
            />
        );
    }

    async function handleLoadMore() {
        fetchNextPage(
            nextPageApiEndpoint,
            () => getCommentsOnPost(postId, nextPageApiEndpoint),
            comments,
            setComments,
            setCommentsLoading,
            setCommentsError
        );
    }

    let commentsElement;
    let loadMoreButton;
    const isDataLoaded = "count" in comments && comments.count > 0;
    if (commentsIsLoading) {
        loadMoreButton = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (commentsError) {
        loadMoreButton = <div>{commentsError.message}</div>;
    } else if (isDataLoaded) {
        nextPageApiEndpoint = comments.next;
        if (!nextPageApiEndpoint) {
            loadMoreButton = "";
        } else {
            loadMoreButton = (
                <LoadMoreButton width="30%" onClick={handleLoadMore} />
            );
        }
        commentsElement = comments.results.map((comment) => (
            <Comment
                key={comment.id}
                comment={comment}
                deleteCommentFrontend={deleteCommentFrontend}
            />
        ));
    } else if ("count" in comments && comments.count === 0) {
        commentsElement = <NoContentFound message="No comments found" />;
    }

    return (
        <FlexContainer>
            {postElement}
            {commentsElement}
            {loadMoreButton}
        </FlexContainer>
    );
};

export default Comments;
