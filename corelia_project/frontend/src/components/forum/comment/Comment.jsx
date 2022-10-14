import React from "react";
import styled from "styled-components";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import stylingConstants from "../../../utils/styling";
import PostUserAndTime from "../post/PostUserAndTime";

const Container = styled.div`
    background: white;
    padding: 1em;
    width: 50%;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    &:last-child {
        margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
    }
`;

const Comment = ({ comment }) => {
    const timeFromComment = getTimeElapsedFromCreation(comment.date_posted);
    return (
        <Container>
            <PostUserAndTime
                profilePicture={comment.user_image}
                username={comment.author_name}
                timeFromPost={timeFromComment}
            />
            <p>{comment.content}</p>
        </Container>
    );
};

export default Comment;
