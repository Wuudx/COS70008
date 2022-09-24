import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const Read = styled.button`
    background-color: ${stylingConstants.colours.blue2Percent100};
    color: white;
    border: none;
    padding: 10px 30px;
    margin: 10px;
    border-radius: 5px;
    font-family: "Lato-bold";

    &:hover {
        background-color: ${stylingConstants.colours.blue2Percent80};
    }
`;

const ReadButton = () => {
    return <Read>READ</Read>;
};
export default ReadButton;
