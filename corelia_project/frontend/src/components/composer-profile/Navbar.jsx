import React from "react";
import NavUl from "../../shared-styled-components/NavUl";
import styled from "styled-components";
import StyledLink from "../../shared-styled-components/StyledLink";
import stylingConstants from "../../utils/styling";
import { useLocation } from "react-router-dom";

const Ul = styled(NavUl)`
    border-bottom: 1px solid ${stylingConstants.colours.blue1};
    padding: 0px;
    padding-bottom: 0.3em;
    .active {
        border-bottom: 0.3em solid ${stylingConstants.colours.blue1};
    }
`;

const Navbar = () => {
    const { pathname } = useLocation();

    function setClassName(linkTo) {
        if (pathname.includes(linkTo)) {
            return "active";
        }
        return "inactive";
    }

    return (
        <Ul gap="2em">
            <li>
                <StyledLink
                    className={setClassName("biography")}
                    to="biography/"
                >
                    Biography
                </StyledLink>
            </li>
            <li>
                <StyledLink className={setClassName("about")} to="about/">
                    About
                </StyledLink>
            </li>
            <li>
                <StyledLink
                    className={setClassName("compositions")}
                    to="compositions/"
                >
                    Compositions
                </StyledLink>
            </li>
        </Ul>
    );
};

export default Navbar;
