import styled from "styled-components";
import CreatePostForm from "./CreatePostForm";
import Posts from "./Posts";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 4em;
`;

const PostsContainer = () => {
    return (
        <FlexContainer>
            <CreatePostForm />
            <Posts />
        </FlexContainer>
    );
};
export default PostsContainer;
