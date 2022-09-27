import styled from "styled-components";
import stylingConstants from "../utils/styling";

const CircularButton = styled.button`
    position: fixed;
    // TODO: Figure out why z-index not working!!
    right: 20px;
    bottom: 20px;
    height: 60px;
    line-height: 60px;
    width: 60px;
    font-size: 2em;
    font-weight: bold;
    border-radius: 50%;
    background-color: ${stylingConstants.colours.blue2Percent30};
    &:hover {
        background-color: ${stylingConstants.colours.blue2Percent80};
    }
    color: white;
    text-align: center;
    cursor: pointer;
`;

export default CircularButton;
