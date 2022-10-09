import React from 'react';
import { useParams } from 'react-router-dom';
import { getForumPostById } from '../../api/forum';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
// import Loader from "../../shared-styled-components/Loader";
import Post from './Post';

const Comments = () => {
    // const { postId } = useParams();
    // const [post, postIsLoading, postError] = useFetchOnPageLoad(() =>
    //     getForumPostById(postId)
    // );
    // console.log(post);

    // let postElement;
    // if (postIsLoading) {
    //     postElement = <Loader />;
    // } else if (postError) {
    //     postElement = <div>{error.message}</div>;
    // } else {
    //     postElement = <Post post={post} />;
    // }
    return <div>a</div>;
};

export default Comments;
