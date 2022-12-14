import styled from "styled-components";
import FeaturedComposers from "./featured-composers/FeaturedComposers";
import PopularBlogPosts from "./popular-blog-posts/PopularBlogPosts";
import React from "react";
import stylingConstants from "../../utils/styling";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
`;

const Home = () => {
    return (
        <FlexContainer>
            <FeaturedComposers />
            <PopularBlogPosts />
        </FlexContainer>
    );
};

export default Home;
