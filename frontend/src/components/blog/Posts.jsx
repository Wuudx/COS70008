import styled from "styled-components";
import CreatePostForm from "./CreatePostForm";

const Container = styled.div`
    width: 50%;
`;

const Posts = () => {
    return (
        <Container>
            <CreatePostForm />
        </Container>
    );
};
export default Posts;
