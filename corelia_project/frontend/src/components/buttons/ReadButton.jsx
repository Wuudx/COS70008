import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import React from "react";

const Read = styled.button`
    background-color: ${stylingConstants.colours.blue1Percent100};
    color: white;
    border: none;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 5px;
    font-family: "Lato-bold";

    &:hover {
        background-color: ${stylingConstants.colours.blue1Percent80};
    }
`;

const ReadButton = ({ onClick }) => {
    return <Read onClick={onClick}>READ</Read>;
};
export default ReadButton;
