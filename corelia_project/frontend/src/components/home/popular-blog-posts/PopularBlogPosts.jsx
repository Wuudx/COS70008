import { useState } from "react";
import styled from "styled-components";
import PopularBlogPost from "./PopularBlogPost";
import React from "react";
import stylingConstants from "../../../utils/styling";

const Container = styled.div`
    border: 1px solid black;
    padding: 1em;
    margin-top: 2%;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-right: ${stylingConstants.sizes.leftRightMargin};
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-shrink: 0;
`;

const PopularBlogPosts = () => {
    // This is just mock data. Real data will be loaded from api.
    const [popularBlogPosts, setPopularBlogPosts] = useState([
        {
            id: 1,
            title: "Blog Title 1",
            preview:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            profilePicture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
        {
            id: 2,
            title: "Blog Title 2",
            preview:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            profilePicture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
        },
    ]);

    return (
        <Container>
            <h3>Popular Blog Posts</h3>
            <FlexContainer>
                {popularBlogPosts.map((popularBlogPost) => (
                    <PopularBlogPost
                        key={popularBlogPost.id}
                        popularBlogPost={popularBlogPost}
                    />
                ))}
            </FlexContainer>
        </Container>
    );
};

export default PopularBlogPosts;
