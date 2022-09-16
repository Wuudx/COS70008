import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavLogo from "../../assets/nav-logo.png";
import stylingConstants from "../../utils/styling";
import Dropdown from "./Dropdown";

const Img = styled.img`
    margin-left: 80px;
    cursor: pointer;
`;

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 70%;
`;

const Container = styled.div`
    display: flex;
    border-bottom: 5px solid ${stylingConstants.colours.blue2Percent30};
    padding: 5px 0px;
`;

const Ul = styled.ul`
    display: flex;
    gap: 50px;
    list-style: none;
`;

const Button = styled.button`
    font-family: lato-bold;
    background-color: white;
    border: none;
    padding: 0px;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    font-family: lato-bold;
    text-decoration: none;
    color: black;
`;

const Navbar = () => {
    const navigate = useNavigate();

    const [isExploreRepDropdownVisible, setIsExploreRepDropdownVisible] =
        useState(false);
    const [isGetInvolvedDropdownVisible, setIsGetInvolvedDropDownVisible] =
        useState(false);

    const exploreRepDropdownRef = useRef();
    const getInvolvedDropdownRef = useRef();

    function toggleExploreRepDropdown() {
        if (isGetInvolvedDropdownVisible) {
            toggleGetInvolvedDropdown();
        }
        setIsExploreRepDropdownVisible(!isExploreRepDropdownVisible);
    }

    function toggleGetInvolvedDropdown() {
        if (isExploreRepDropdownVisible) {
            toggleExploreRepDropdown();
        }
        setIsGetInvolvedDropDownVisible(!isGetInvolvedDropdownVisible);
    }

    // If any dropdown is open and user clicks outside dropdown, this function will close the dropdown.
    function handleDropdownClick(e) {
        const shouldCloseExploreRepDropdown =
            exploreRepDropdownRef.current &&
            !exploreRepDropdownRef.current.contains(e.target) &&
            isExploreRepDropdownVisible;

        const shouldCloseGetInvolvedDropdown =
            getInvolvedDropdownRef.current &&
            !getInvolvedDropdownRef.current.contains(e.target) &&
            isGetInvolvedDropdownVisible;

        if (shouldCloseExploreRepDropdown) {
            toggleExploreRepDropdown();
        } else if (shouldCloseGetInvolvedDropdown) {
            toggleGetInvolvedDropdown();
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleDropdownClick);

        // Callback function that runs when component unmounts. This ensures that when we remount the component later,
        // we do not have more than one event listener.
        return () =>
            window.removeEventListener("mousedown", handleDropdownClick);
    }, [isExploreRepDropdownVisible, isGetInvolvedDropdownVisible]);
    return (
        <Container>
            <Img src={NavLogo} alt="logo" onClick={() => navigate("/")} />
            <Nav>
                <Ul>
                    <li>
                        <StyledLink to="/about/">About</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/discover-composers/">
                            Discover Composers
                        </StyledLink>
                    </li>
                    <li ref={exploreRepDropdownRef}>
                        <Button
                            type="button"
                            onClick={toggleExploreRepDropdown}
                        >
                            Explore Reportoire
                        </Button>
                        <Dropdown
                            isVisible={isExploreRepDropdownVisible}
                            dropdownName="Explore Reportoire"
                        />
                    </li>
                    <li>
                        <StyledLink to="/blog/">Blog</StyledLink>
                    </li>
                    <li ref={getInvolvedDropdownRef}>
                        <Button
                            type="button"
                            onClick={toggleGetInvolvedDropdown}
                        >
                            Get Involved
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
