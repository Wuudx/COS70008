import React from "react";
import { useParams } from "react-router-dom";
import { getForumPostById } from "../../api/forum";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import Post from "./Post";
import ScaleLoader from "react-spinners/ScaleLoader";
import stylingConstants from "../../utils/styling";
import styled from "styled-components";

const OuterFlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Comments = () => {
    const { postId } = useParams();
    const [post, postIsLoading, postError] = useFetchOnPageLoad(() =>
        getForumPostById(postId)
    );
    let postElement;
    if (postIsLoading) {
        postElement = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (postError) {
        postElement = <OuterFlexContainer>{error.message}</OuterFlexContainer>;
    } else if (post.length > 0) {
        // We add this check because initially, post is an empty array until after it loads (this is due to the fact that
        // the custom hook useFetchOnPageLoad sets data initially as an empty array.)

        // We get the first element because "post" is an array of length 1.
        const postContent = post[0];
        postElement = (
            <OuterFlexContainer>
                <Post post={postContent} postContainerWidth="50%" />
            </OuterFlexContainer>
        );
    }

    return postElement;
};

export default Comments;
