import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import React from 'react';

const LoadMore = styled.div`
    background-color: ${stylingConstants.colours.blue1Percent100};
    color: white;
    border: none;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 5px;
    font-family: 'Lato-bold';
    cursor: pointer;

    &:hover {
        background-color: ${stylingConstants.colours.blue1Percent80};
    }
`;

const LoadMoreButton = () => {
    return <LoadMore>LOAD MORE</LoadMore>;
};

export default LoadMoreButton;
