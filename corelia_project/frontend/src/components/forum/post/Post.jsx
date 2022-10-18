import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthState } from "../../../context";
import PostContainer from "../../../shared-styled-components/PostContainer";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import AttachedImage from "./AttachedImage";
import CommentAndShare from "./CommentAndShare";
import CommentForm from "./CommentForm";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import PostContent from "./PostContent";
import PostUserAndTime from "./PostUserAndTime";

// TODO: Add check to see if user is deleting or editing post while viewing comments. If so, perform edit or delete on backend
// but don't update frontend.
const Post = ({
    post,
    postContainerWidth,
    addComment,
    deletePostFrontend,
    editPostFrontend,
}) => {
    const user = useAuthState();
    const timeFromPost = getTimeElapsedFromCreation(post.date_posted);
    const { postId } = useParams();
    const [isEditing, setIsEditing] = useState(false);

    function toggleIsEditing() {
        setIsEditing((isEditing) => !isEditing);
    }

    let deleteButton;
    let editButton;
    if (user.user && user.user.id === post.user) {
        deleteButton = (
            <DeleteButton
                postId={post.id}
                deletePostFrontend={deletePostFrontend}
            />
        );
        editButton = <EditButton toggleIsEditing={toggleIsEditing} />;
    } else {
        deleteButton = "";
        editButton = "";
    }

    // Only render comment form if user is looking at post on its own.
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
            <PostContent
                postId={post.id}
                content={post.content}
                isEditing={isEditing}
                toggleIsEditing={toggleIsEditing}
                editPostFrontend={editPostFrontend}
            />
            <AttachedImage />
            <CommentAndShare numComments={post.num_comments} postId={post.id} />
            {commentForm}
            {deleteButton}
            {editButton}
        </PostContainer>
    );
};
export default Post;
