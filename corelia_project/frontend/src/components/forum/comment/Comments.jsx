import React from "react";
import { useParams } from "react-router-dom";
import { getCommentsOnPost, getForumPostById } from "../../../api/forum";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import Post from "../post/Post";
import ScaleLoader from "react-spinners/ScaleLoader";
import stylingConstants from "../../../utils/styling";
import styled from "styled-components";
import Comment from "./Comment";

const OuterFlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

// TODO: Add message if there are no comments on a post.
const Comments = () => {
    const { postId } = useParams();
    const [post, postIsLoading, postError] = useFetchOnPageLoad(() =>
        getForumPostById(postId)
    );

    const [comments, commentsIsLoading, commentsError] = useFetchOnPageLoad(
        () => getCommentsOnPost(postId)
    );

    let postElement;
    if (postIsLoading) {
        postElement = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (postError) {
        postElement = <OuterFlexContainer>{error.message}</OuterFlexContainer>;
    } else if (post.length > 0) {
        // We add this check because initially, post is an empty array until after it loads (this is due to the fact that
        // the custom hook useFetchOnPageLoad sets data initially as an empty array.)

        // We get the first element because "post" is an array of length 1.
        const postContent = post[0];
        postElement = (
            <OuterFlexContainer>
                <Post post={postContent} postContainerWidth="50%" />
            </OuterFlexContainer>
        );
    }

    let commentsElement;
    if (commentsIsLoading) {
        commentsElement = (
            <ScaleLoader color={stylingConstants.colours.blue1} />
        );
    } else if (commentsError) {
        commentsElement = <div>{commentsError.message}</div>;
    } else if (comments.length > 0) {
        commentsElement = comments.map((comment) => (
            <Comment comment={comment} />
        ));
    }

    return (
        <>
            {postElement}
            {commentsElement}
        </>
    );
};

export default Comments;
