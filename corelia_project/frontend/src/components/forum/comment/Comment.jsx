import React, { useState } from "react";
import styled from "styled-components";
import { deleteComment } from "../../../api/forum";
import { useAuthState } from "../../../context";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import stylingConstants from "../../../utils/styling";
import DeleteContentButton from "../DeleteContentButton";
import EditButton from "../post/EditButton";
import PostUserAndTime from "../post/PostUserAndTime";
import CommentContent from "./CommentContent";

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

const Comment = ({ comment, deleteCommentFrontend, editCommentFrontend }) => {
    const timeFromComment = getTimeElapsedFromCreation(comment.date_posted);
    const user = useAuthState();
    const [isEditing, setIsEditing] = useState(false);

    function toggleIsEditing() {
        setIsEditing((isEditing) => !isEditing);
    }

    let deleteButton = "";
    let editButton = "";
    if (user.user && user.user.id === comment.user) {
        deleteButton = (
            <DeleteContentButton
                contentId={comment.id}
                apiDeleteContent={deleteComment}
                frontendDeleteContent={deleteCommentFrontend}
            />
        );
        editButton = <EditButton toggleIsEditing={toggleIsEditing} />;
    } else {
        editButton = "";
        deleteButton = "";
    }

    return (
        <Container>
            <PostUserAndTime
                profilePicture={comment.user_image}
                username={comment.author_name}
                timeFromPost={timeFromComment}
            />
            <CommentContent
                commentId={comment.id}
                content={comment.content}
                isEditing={isEditing}
                toggleIsEditing={toggleIsEditing}
                editCommentFrontend={editCommentFrontend}
            />
            {deleteButton}
            {editButton}
        </Container>
    );
};

export default Comment;
