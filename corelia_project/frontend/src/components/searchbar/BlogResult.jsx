import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 30%;
    cursor: pointer;
`;

const BlogName = styled.div`
    font-family: 'Lato-Bold';
    font-size: 1em;
    margin-bottom: 5px;
    align-self: flex-start;
`;

const BlogResult = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${blog.id}`);
    };

    return (
        <Container onClick={handleClick}>
            <BlogName>{blog.title}</BlogName>
        </Container>
    );
};
export default BlogResult;
