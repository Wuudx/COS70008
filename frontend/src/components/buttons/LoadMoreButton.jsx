import styled from 'styled-components';
import stylingConstants from '../../utils/styling';

const LoadMore = styled.div`
    background-color: ${stylingConstants.colours.blue1Percent80};
    color: white;
    border: none;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 5px;
    font-family: 'Lato-bold';
    cursor: pointer;

    &:hover {
        background-color: ${stylingConstants.colours.blue1Percent100};
    }
`;

const LoadMoreButton = ({ onClick }) => {
    return <LoadMore onClick={onClick}>LOAD MORE</LoadMore>;
};

export default LoadMoreButton;
