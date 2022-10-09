import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import React from 'react';

const Button = styled.button`
    width: 100%;
    background: ${(props) =>
        props.isFocused ? stylingConstants.colours.blue2Percent100 : 'none'};
    color: ${(props) => (props.isFocused ? 'white' : 'black')};
    border: none;
    cursor: pointer;
    font-family: lato-bold;
    font-size: 1.2em;
    &:hover {
        background: ${stylingConstants.colours.blue2Percent80};
    }
    padding: 0.5em 0em;
`;

const MonthFilter = ({ month, focusedMonth, setFocusedMonth }) => {
    const navigate = useNavigate();
    const isFocused = focusedMonth === month;

    function handleClick() {
        if (isFocused) {
            setFocusedMonth('');
            navigate('/blog');
        } else {
            setFocusedMonth(month);
            navigate(`?month=${month}`);
        }
    }

    return (
        <Button isFocused={isFocused} onClick={handleClick}>
            {month}
        </Button>
    );
};
export default MonthFilter;
