import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import AttachedImage from "./AttachedImage";
import CommentAndShare from "./CommentAndShare";
import CommentForm from "./CommentForm";
import PostContent from "./PostContent";
import PostUserAndTime from "./PostUserAndTime";
import React from "react";

const Container = styled.div`
    background: white;
    width: 100%;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    padding: 1em;
    p,
    span {
        font-family: lato-regular;
    }
`;

const Post = ({ post }) => {
    return (
        <Container>
            <PostUserAndTime
                profilePicture={post.profilePicture}
                username={post.username}
                timeFromPost={post.timeFromPost}
            />
            <PostContent content={post.content} />
            <AttachedImage />
            <CommentAndShare numComments={post.numComments} postId={post.id} />
            <CommentForm profilePicture={post.profilePicture} />
        </Container>
    );
};
export default Post;
