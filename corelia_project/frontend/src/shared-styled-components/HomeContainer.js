import styled from "styled-components";
import stylingConstants from "../utils/styling";

const HomeContainer = styled.div`
    padding: 1em;
    margin-top: 2%;
    margin-left: ${stylingConstants.sizes.leftRightMargin};
    margin-right: ${stylingConstants.sizes.leftRightMargin};
    h3 {
        font-family: lato-bold;
    }
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
`;

export default HomeContainer;
