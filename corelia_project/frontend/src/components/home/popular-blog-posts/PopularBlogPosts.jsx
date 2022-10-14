import React from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { getPopularBlogPosts } from "../../../api/popular-blogs";
import useFetchOnPageLoad from "../../../hooks/useFetchOnPageLoad";
import HomeContainer from "../../../shared-styled-components/HomeContainer";
import stylingConstants from "../../../utils/styling";
import PopularBlogPost from "./PopularBlogPost";

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`;

const PopularBlogPosts = () => {
    const [data, isLoading, error] = useFetchOnPageLoad(getPopularBlogPosts);

    let content;
    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        toast.error("Failed to load popular blog posts!");
    } else if ("count" in data && data.results) {
        content = data.results.map((popularBlogPost) => (
            <PopularBlogPost
                key={popularBlogPost.id}
                popularBlogPost={popularBlogPost}
            />
        ));
    }

    return (
        <HomeContainer>
            <h2>Popular Blog Posts</h2>
            <FlexContainer>{content}</FlexContainer>
        </HomeContainer>
    );
};

export default PopularBlogPosts;
