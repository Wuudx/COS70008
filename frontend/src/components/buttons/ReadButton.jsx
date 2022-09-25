import styled from 'styled-components';
import stylingConstants from '../../utils/styling';

const Read = styled.button`
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

const ReadButton = ({ onClick }) => {
    return <Read onClick={onClick}>READ</Read>;
};
export default ReadButton;
