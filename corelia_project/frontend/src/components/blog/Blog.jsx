import React from 'react';
import styled from 'styled-components';
import MonthFilters from './MonthFilters';
import stylingConstants from '../../utils/styling';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import { getBlogPosts } from '../../api/blogs';
import BlogPosts from './BlogPosts';

const BlogContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const Padding = styled.div`
    width: 20%;
    margin-right: ${stylingConstants.sizes.leftRightMargin};
`;

const Blog = () => {
    const { data, isLoading, error } = useFetchOnPageLoad(getBlogPosts);

    console.log(data);
    return (
        <BlogContainer>
            <MonthFilters />
            <BlogPosts blogPosts={data} />
            <Padding />
        </BlogContainer>
    );
};
export default Blog;
