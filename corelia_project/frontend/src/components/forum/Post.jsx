import AttachedImage from "./AttachedImage";
import CommentAndShare from "./CommentAndShare";
import CommentForm from "./CommentForm";
import PostContent from "./PostContent";
import PostUserAndTime from "./PostUserAndTime";
import React from "react";
import { getTimeElapsedFromCreation } from "../../utils/date-time";
import PostContainer from "../../shared-styled-components/PostContainer";

const Post = ({ post, postContainerWidth }) => {
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
            <CommentForm profilePicture={post.profilePicture} />
        </PostContainer>
    );
};
export default Post;
