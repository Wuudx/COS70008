import React from "react";
import { useAuthState } from "../../../context";
import PostContainer from "../../../shared-styled-components/PostContainer";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import AttachedImage from "../AttachedImage";
import CommentAndShare from "../CommentAndShare";
import CommentForm from "../CommentForm";
import DeleteButton from "./DeleteButton";
import PostContent from "./PostContent";
import PostUserAndTime from "./PostUserAndTime";

const Post = ({ post, postContainerWidth, addComment, deletePostFrontend }) => {
    const user = useAuthState();
    const timeFromPost = getTimeElapsedFromCreation(post.date_posted);

    let deleteButton;
    if (user.user && user.user.id === post.user) {
        deleteButton = (
            <DeleteButton
                postId={post.id}
                deletePostFrontend={deletePostFrontend}
            />
        );
    } else {
        deleteButton = "";
    }

    return (
        <PostContainer postContainerWidth={postContainerWidth}>
            <PostUserAndTime
                profilePicture={post.profilePicture}
                username={post.author_name}
                timeFromPost={timeFromPost}
            />
            <PostContent content={post.content} />
            <AttachedImage />
            <CommentAndShare numComments={4} postId={post.id} />
            <CommentForm
                postId={post.id}
                profilePicture={post.profilePicture}
                addComment={addComment}
            />
            {deleteButton}
        </PostContainer>
    );
};
export default Post;
