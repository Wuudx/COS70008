import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useToggleDropdown from "../../../hooks/useToggleDropdown";
import NavButton from "../../../shared-styled-components/NavButton";
import Ul from "../../../shared-styled-components/NavUl";
import stylingConstants from "../../../utils/styling";
import Dropdown from "../../navbar/Dropdown";

const Button = styled(NavButton)`
    font-family: lato-regular;
    color: ${stylingConstants.colours.blue1Percent80};
    border-bottom: 2px solid white;
    &:hover {
        border-bottom: 2px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

const StyledLink = styled(Link)`
    font-family: lato-regular;
    text-decoration: none;
    color: ${stylingConstants.colours.blue1Percent80};
    &:hover {
        border-bottom: 2px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

const Navbar = () => {
    const exploreRepDropdownRef = useRef();
    const getInvolvedDropdownRef = useRef();

    const {
        isExploreRepDropdownVisible,
        isGetInvolvedDropdownVisible,
        toggleExploreRepDropdown,
        toggleGetInvolvedDropdown,
    } = useToggleDropdown(exploreRepDropdownRef, getInvolvedDropdownRef);

    return (
        <nav>
            <Ul gap="5em">
                <li>
                    <StyledLink to="/about/">About</StyledLink>
                </li>
                <li>
                    <StyledLink to="/discover-composers/">
                        Discover Composers
                    </StyledLink>
                </li>
                <li ref={exploreRepDropdownRef}>
                    <Button type="button" onClick={toggleExploreRepDropdown}>
                        Explore Repertoire
                    </Button>
                    <Dropdown
                        isVisible={isExploreRepDropdownVisible}
                        dropdownName="Explore Repertoire"
                    />
                </li>
                <li>
                    <StyledLink to="/blog/">Blog</StyledLink>
                </li>
                <li ref={getInvolvedDropdownRef}>
                    <Button type="button" onClick={toggleGetInvolvedDropdown}>
                        Get Involved
                    </Button>
                    <Dropdown
                        isVisible={isGetInvolvedDropdownVisible}
                        dropdownName="Get Involved"
                    />
                </li>
            </Ul>
        </nav>
    );
};

export default Navbar;
