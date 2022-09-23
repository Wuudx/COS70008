import styled from "styled-components";
import stylingConstants from "../utils/styling";

const CircularButton = styled.button`
    position: fixed;
    right: 20px;
    bottom: 20px;
    height: 60px;
    line-height: 60px;
    width: 60px;
    font-size: 2em;
    font-weight: bold;
    border-radius: 50%;
    background-color: ${stylingConstants.colours.blue1};
    &:hover {
        background-color: ${stylingConstants.colours.blue2};
    }
    color: white;
    text-align: center;
    cursor: pointer;
    border: none;
`;

export default CircularButton;
