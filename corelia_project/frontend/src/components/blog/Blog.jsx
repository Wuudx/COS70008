import React from 'react';
import styled from 'styled-components';
import MonthFilters from './MonthFilters';
import stylingConstants from '../../utils/styling';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import useFetchOnParamChange from '../../hooks/useFetchOnParamChange';
import useSearchQuery from '../../hooks/useSearchQuery';
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
    const currentMonthFilter = useSearchQuery('month');
    const [blogPosts, isLoading, error, setblogPosts, setIsLoading, setError] =
        useFetchOnPageLoad(getBlogPosts);
    useFetchOnParamChange(
        getBlogPosts,
        currentMonthFilter,
        setblogPosts,
        setIsLoading,
        setError
    );

    return (
        <BlogContainer>
            <MonthFilters />
            <BlogPosts blogPosts={blogPosts} />
            <Padding />
        </BlogContainer>
    );
};
export default Blog;
