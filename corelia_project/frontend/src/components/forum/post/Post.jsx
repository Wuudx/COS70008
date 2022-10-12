import React from "react";
import PostContainer from "../../../shared-styled-components/PostContainer";
import { getTimeElapsedFromCreation } from "../../../utils/date-time";
import AttachedImage from "../AttachedImage";
import CommentAndShare from "../CommentAndShare";
import CommentForm from "../CommentForm";
import PostContent from "./PostContent";
import PostUserAndTime from "./PostUserAndTime";

const Post = ({ post, postContainerWidth, addComment }) => {
    const timeFromPost = getTimeElapsedFromCreation(post.date_posted);

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
        </PostContainer>
    );
};
export default Post;
