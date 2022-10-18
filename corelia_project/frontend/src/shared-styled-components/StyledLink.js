import { Link } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../utils/styling";

// Maybe put this in shared styled components with color prop since we will be using this in footer as well.
const StyledLink = styled(Link)`
    font-family: lato-bold;
    text-decoration: none;
    color: black;
    &:hover {
        border-bottom: ${(props) => props.borderBottom};
    }
    overflow: hidden;
    white-space: nowrap;
`;

StyledLink.defaultProps = {
    borderBottom: `3px solid ${stylingConstants.colours.blue2Percent30}`,
};

export default StyledLink;
