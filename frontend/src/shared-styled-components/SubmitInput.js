import styled from "styled-components";
import stylingConstants from "../utils/styling";

const SubmitInput = styled.input.attrs({ type: "submit" })`
    width: 40%;
    height: 3em;
    font-family: lato-bold;
    background: ${stylingConstants.colours.blue1Percent80};
    border: none;
    color: white;
    border-radius: 0.5em;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
    cursor: pointer;
    &:hover {
        background: ${stylingConstants.colours.blue1Percent100};
    }
`;

export default SubmitInput;
