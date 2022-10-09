import React from "react";
import { useParams } from "react-router-dom";
import { getForumPostById } from "../../api/forum";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import Post from "./Post";
import ScaleLoader from "react-spinners/ScaleLoader";

const Comments = () => {
    const { postId } = useParams();
    const [post, postIsLoading, postError] = useFetchOnPageLoad(() =>
        getForumPostById(postId)
    );
    let postElement;
    if (postIsLoading) {
        postElement = <ScaleLoader />;
    } else if (postError) {
        postElement = <div>{error.message}</div>;
    } else if (post.length > 0) {
        // We add this check because initially, post is an empty array until after it loads (this is due to the fact that
        // the custom hook useFetchOnPageLoad sets data initially as an empty array.)

        // We get the first element because "post" is an array of length 1.
        const postContent = post[0];
        postElement = <Post post={postContent} />;
    }

    return postElement;
};

export default Comments;
