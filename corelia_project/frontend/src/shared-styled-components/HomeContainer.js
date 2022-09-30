import styled from "styled-components";
import stylingConstants from "../utils/styling";

const HomeContainer = styled.div`
    border: 1px solid black;
    padding: 1em;
    margin-top: 2%;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-right: ${stylingConstants.sizes.leftRightMargin};
    h3 {
        font-family: lato-bold;
    }
`;

export default HomeContainer;
