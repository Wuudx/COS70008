import React from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "../../../context";
import PostContainer from "../../../shared-styled-components/PostContainer";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import AttachedImage from "./AttachedImage";
import CommentAndShare from "./CommentAndShare";
import CommentForm from "./CommentForm";
import DeleteButton from "./DeleteButton";
import PostContent from "./PostContent";
import PostUserAndTime from "./PostUserAndTime";

const Post = ({ post, postContainerWidth, addComment, deletePostFrontend }) => {
    const user = useAuthState();
    const timeFromPost = getTimeElapsedFromCreation(post.date_posted);
    const { postId } = useParams();

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

    let commentForm;
    if (!postId) {
        commentForm = "";
    } else {
        commentForm = (
            <CommentForm
                postId={post.id}
                profilePicture={post.user_image}
                addComment={addComment}
            />
        );
    }

    return (
        <PostContainer postContainerWidth={postContainerWidth}>
            <PostUserAndTime
                profilePicture={post.user_image}
                username={post.author_name}
                timeFromPost={timeFromPost}
            />
            <PostContent content={post.content} />
            <AttachedImage />
            <CommentAndShare numComments={post.num_comments} postId={post.id} />
            {commentForm}
            {deleteButton}
        </PostContainer>
    );
};
export default Post;
