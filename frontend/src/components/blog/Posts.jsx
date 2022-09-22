import { useState } from "react";
import styled from "styled-components";
import Post from "./Post";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
`;

const Posts = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            username: "John",
            profilePicture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
            timeFromPost: "1h",
            image: null,
            numComments: 4,
            content:
                "Ullamco ullamco consequat incididunt commodo anim ex. Exercitation irure dolor excepteur ex nulla reprehenderit eu est sunt enim fugiat ipsum ea sit. Eiusmod dolore et cillum veniam magna qui ipsum adipisicing eu culpa et sint tempor cillum.",
        },
        {
            id: 2,
            username: "Jack",
            profilePicture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
            timeFromPost: "1h",
            image: null,
            numComments: 1,
            content:
                "Officia elit cupidatat proident duis est adipisicing ut labore. Ullamco ut ut nulla cupidatat labore ullamco. Aliquip magna qui veniam id Lorem Lorem ut laboris eu ipsum ea. Anim qui fugiat proident dolor. Lorem qui consectetur fugiat incididunt non minim cupidatat tempor duis nostrud cupidatat. Reprehenderit excepteur in cupidatat laboris elit officia non non adipisicing ea ipsum consequat dolore.",
        },
        {
            id: 3,
            username: "Jill",
            profilePicture:
                "https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg",
            timeFromPost: "7h",
            image: null,
            numComments: 103,
            content:
                "Exercitation incididunt tempor Lorem irure. Aliquip quis Lorem nisi dolor aliquip excepteur nisi labore consequat amet. Quis consequat enim sit quis officia aute sit.",
        },
    ]);

    return (
        <FlexContainer>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </FlexContainer>
    );
};
export default Posts;
