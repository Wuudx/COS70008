import React from "react";
import styled from "styled-components";
import stylingConstants from "../../../utils/styling";

const Button = styled.button`
    position: absolute;
    right: 1em;
    bottom: 1em;
    background-color: ${stylingConstants.colours.blue1Percent100};
    color: white;
    border: none;
    padding: 5px;
    border-radius: 5px;
    font-family: "Lato-bold";
    cursor: pointer;
    user-select: none;
    width: ${(props) => (props.width ? props.width : "auto")};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: ${stylingConstants.colours.blue1Percent80};
    }
`;

const EditButton = ({ toggleIsEditing }) => {
    return (
        <Button type="button" onClick={toggleIsEditing}>
            Edit
        </Button>
    );
};
export default EditButton;
