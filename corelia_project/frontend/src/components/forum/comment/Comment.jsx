import React from "react";
import styled from "styled-components";
import { useAuthState } from "../../../context";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import stylingConstants from "../../../utils/styling";
import PostUserAndTime from "../post/PostUserAndTime";
import DeleteButton from "./DeleteButton";

const Container = styled.div`
    background: white;
    padding: 1em;
    width: 50%;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    &:last-child {
        margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
    }
    position: relative;
`;

const Comment = ({ comment, deleteCommentFrontend }) => {
    const timeFromComment = getTimeElapsedFromCreation(comment.date_posted);
    const user = useAuthState();

    let deleteButton = "";
    if (user.user && user.user.id === comment.user) {
        deleteButton = (
            <DeleteButton
                commentId={comment.id}
                deleteCommentFrontend={deleteCommentFrontend}
            />
        );
    }

    return (
        <Container>
            <PostUserAndTime
                profilePicture={comment.user_image}
                username={comment.author_name}
                timeFromPost={timeFromComment}
            />
            <p>{comment.content}</p>
            {deleteButton}
        </Container>
    );
};

export default Comment;
