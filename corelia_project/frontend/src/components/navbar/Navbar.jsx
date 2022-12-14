import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavLogo from "../../../../frontend/static/images/nav-logo.png";
import { useDetectOutsideClick } from "../../hooks/useDetectOutsideClick";
import useHandleWindowResize from "../../hooks/useHandleWindowResize";
import Ul from "../../shared-styled-components/NavUl";
import StyledLink from "../../shared-styled-components/StyledLink";
import { getScreenType, screenTypes } from "../../utils/get-screen-type";
import stylingConstants from "../../utils/styling";
import Account from "../account/Account";
import Dropdown from "./Dropdown";
import ToggleDropdownButton from "./ToggleDropdownButton";

const Img = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    margin: 4px 0 0 80px;
    cursor: pointer;
`;

// Only needed to center the navbar vertically.
const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: auto 240px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
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

// TODO: Increasing the size of the up arrows (IoIosArrowUp) using size={x} ruins alignment of navbar. Figure out why!!!!
const Navbar = () => {
    const navigate = useNavigate();
    const windowWidth = useHandleWindowResize();

    const exploreRepDropdownRef = useRef();
    const getInvolvedDropdownRef = useRef();

    const [isExploreRepDropdownVisible, setIsExploreRepDropdownVisible] =
        useDetectOutsideClick(exploreRepDropdownRef, false);
    const [isGetInvolvedDropdownVisible, setIsGetInvolvedDropdownVisible] =
        useDetectOutsideClick(getInvolvedDropdownRef, false);

    let logo;
    const screenType = getScreenType(parseInt(windowWidth));
    if (
        screenType === screenTypes.mobile ||
        screenType === screenTypes.tablet
    ) {
        logo = "";
    } else {
        logo = <Img src={NavLogo} alt="logo" onClick={() => navigate("/")} />;
    }

    function toggleExploreRepDropdown() {
        setIsExploreRepDropdownVisible(!isExploreRepDropdownVisible);
    }

    function toggleGetInvolvedDropdown() {
        setIsGetInvolvedDropdownVisible(!isGetInvolvedDropdownVisible);
    }

    return (
        <Container>
            {logo}
            <Nav>
                <Ul gap="4em">
                    <li>
                        <StyledLink to="/about">About</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/discover-composers">
                            Discover Composers
                        </StyledLink>
                    </li>
                    <li ref={exploreRepDropdownRef}>
                        <ToggleDropdownButton
                            buttonText="Explore Repertoire"
                            toggleDropdownFunction={toggleExploreRepDropdown}
                            isDropdownVisible={isExploreRepDropdownVisible}
                        />
                        <Dropdown
                            isVisible={isExploreRepDropdownVisible}
                            dropdownName="Explore Repertoire"
                        />
                    </li>
                    <li>
                        <StyledLink to="/blog">Blog</StyledLink>
                    </li>
                    <li ref={getInvolvedDropdownRef}>
                        <ToggleDropdownButton
                            buttonText="Get Involved"
                            toggleDropdownFunction={toggleGetInvolvedDropdown}
                            isDropdownVisible={isGetInvolvedDropdownVisible}
                        />
                        <Dropdown
                            isVisible={isGetInvolvedDropdownVisible}
                            dropdownName="Get Involved"
                        />
                    </li>
                </Ul>
            </Nav>
            <Account />
        </Container>
    );
};

export default Navbar;
