import styled from "styled-components";
import stylingConstants from "../utils/styling";

const SubmitInput = styled.input.attrs({ type: "submit" })`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    font-family: lato-bold;
    background: ${stylingConstants.colours.blue1Percent80};
    border: none;
    color: white;
    border-radius: 0.5em;
    cursor: pointer;
    &:hover {
        background: ${stylingConstants.colours.blue1Percent100};
    }
`;

export default SubmitInput;
