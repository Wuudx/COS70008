import styled from "styled-components";
import stylingConstants from "../utils/styling";

const TextArea = styled.textarea`
    border-radius: 1em;
    padding: 1em;
    background: ${stylingConstants.colours.blue2Percent10};
    font-family: lato-regular;
`;

export default TextArea;
