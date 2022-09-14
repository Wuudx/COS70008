import styled from "styled-components";
import FeaturedComposers from "./featured-composers/FeaturedComposers";
import PopularBlogPosts from "./popular-blog-posts/PopularBlogPosts";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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
