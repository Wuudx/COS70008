import React from 'react';
import styled from 'styled-components';
import MonthFilters from './MonthFilters';
import stylingConstants from '../../utils/styling';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import useFetchOnParamChange from '../../hooks/useFetchOnParamChange';
import useSearchQuery from '../../hooks/useSearchQuery';
import { getBlogPosts, getBlogPostsByMonth } from '../../api/blogs';
import BlogPosts from './BlogPosts';
import { ScaleLoader } from 'react-spinners';

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

    const months = {
        January: 1,
        February: 2,
        March: 3,
        April: 4,
        May: 5,
        June: 6,
        July: 7,
        August: 8,
        September: 9,
        October: 10,
        November: 11,
        December: 12,
    };

    useFetchOnParamChange(
        () => getBlogPostsByMonth(months[currentMonthFilter]),
        currentMonthFilter,
        setblogPosts,
        setIsLoading,
        setError
    );

    const blogs = blogPosts.results ?? blogPosts;

    let content;
    if (isLoading) {
        content = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else if (error) {
        content = <div>There was an error</div>;
    } else {
        content = <BlogPosts blogPosts={blogs} />;
    }

    return (
        <BlogContainer>
            <MonthFilters />
            {content}
            <Padding />
        </BlogContainer>
    );
};
export default Blog;
