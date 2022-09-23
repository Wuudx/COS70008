import { useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavLogo from "../../assets/images/nav-logo.png";
import useToggleDropdown from "../../hooks/useToggleDropdown";
import NavButton from "../../shared-styled-components/NavButton";
import Ul from "../../shared-styled-components/NavUl";
import stylingConstants from "../../utils/styling";
import Dropdown from "./Dropdown";

const Img = styled.img`
    margin-left: 80px;
    cursor: pointer;
`;

// Only needed to center the navbar vertically.
const Nav = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 12%;
`;

const Container = styled.div`
    display: flex;
    height: ${stylingConstants.sizes.navbarHeight};
    border-bottom: 5px solid ${stylingConstants.colours.blue2Percent30};
    padding: 5px 0px;
    width: 100%;
    position: fixed;
    left 0;
    top: 0;
    z-index: 100;
    background-color: white;
`;

const Button = styled(NavButton)`
    font-family: lato-bold;
    border-bottom: 3px solid white; // So that the navbar does not jump up on hover.
    &:hover {
        border-bottom: 3px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

// Maybe put this in shared styled components with color prop since we will be using this in footer as well.
const StyledLink = styled(Link)`
    font-family: lato-bold;
    text-decoration: none;
    color: black;
    &:hover {
        border-bottom: 3px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

// TODO: Increasing the size of the up arrows (IoIosArrowUp) using size={x} ruins alignment of navbar. Figure out why!!!!
const Navbar = () => {
    const navigate = useNavigate();

    const exploreRepDropdownRef = useRef();
    const getInvolvedDropdownRef = useRef();

    const {
        isExploreRepDropdownVisible,
        isGetInvolvedDropdownVisible,
        toggleExploreRepDropdown,
        toggleGetInvolvedDropdown,
    } = useToggleDropdown(exploreRepDropdownRef, getInvolvedDropdownRef);

    return (
        <Container>
            <Img src={NavLogo} alt="logo" onClick={() => navigate("/")} />
            <Nav>
                <Ul gap="3em">
                    <li>
                        <StyledLink to="/about">About</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/discover-composers">
                            Discover Composers
                        </StyledLink>
                    </li>
                    <li ref={exploreRepDropdownRef}>
                        <Button
                            type="button"
                            onClick={toggleExploreRepDropdown}
                        >
                            Explore Repertoire
                            <IoIosArrowUp
                                color={stylingConstants.colours.blue2Percent30}
                                // This ensures that arrow is inline with text.
                                style={{ verticalAlign: "bottom" }}
                            />
                        </Button>
                        <Dropdown
                            isVisible={isExploreRepDropdownVisible}
                            dropdownName="Explore Repertoire"
                        />
                    </li>
                    <li>
                        <StyledLink to="/blog">Blog</StyledLink>
                    </li>
                    <li ref={getInvolvedDropdownRef}>
                        <Button
                            type="button"
                            onClick={toggleGetInvolvedDropdown}
                        >
                            Get Involved
                            <IoIosArrowUp
                                color={stylingConstants.colours.blue2Percent30}
                                style={{ verticalAlign: "bottom" }}
                            />
                        </Button>
                        <Dropdown
                            isVisible={isGetInvolvedDropdownVisible}
                            dropdownName="Get Involved"
                        />
                    </li>
                </Ul>
            </Nav>
        </Container>
    );
};

export default Navbar;
