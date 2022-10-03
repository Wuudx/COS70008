import { useRef } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavLogo from '../../../../frontend/static/images/nav-logo.png';
import NavButton from '../../shared-styled-components/NavButton';
import Ul from '../../shared-styled-components/NavUl';
import stylingConstants from '../../utils/styling';
import Dropdown from './Dropdown';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import React from 'react';
import Account from '../account/Account';

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

    const [isExploreRepDropdownVisible, toggleExploreRepDropdown] =
        useDetectOutsideClick(exploreRepDropdownRef, false);
    const [isGetInvolvedDropdownVisible, toggleGetInvolvedDropdown] =
        useDetectOutsideClick(getInvolvedDropdownRef, false);

    return (
        <Container>
            <Img src={NavLogo} alt='logo' onClick={() => navigate('/')} />
            <Nav>
                <Ul gap='3em'>
                    <li>
                        <StyledLink to='/about'>About</StyledLink>
                    </li>
                    <li>
                        <StyledLink to='/discover-composers'>
                            Discover Composers
                        </StyledLink>
                    </li>
                    <li ref={exploreRepDropdownRef}>
                        <Button
                            type='button'
                            onClick={toggleExploreRepDropdown}
                        >
                            Explore Repertoire
                            {isExploreRepDropdownVisible ? (
                                <IoIosArrowUp
                                    color={
                                        stylingConstants.colours.blue2Percent30
                                    }
                                    // This ensures that arrow is inline with text.
                                    style={{ verticalAlign: 'bottom' }}
                                />
                            ) : (
                                <IoIosArrowDown
                                    color={
                                        stylingConstants.colours.blue2Percent30
                                    }
                                    // This ensures that arrow is inline with text.
                                    style={{ verticalAlign: 'bottom' }}
                                />
                            )}
                        </Button>
                        <Dropdown
                            isVisible={isExploreRepDropdownVisible}
                            dropdownName='Explore Repertoire'
                        />
                    </li>
                    <li>
                        <StyledLink to='/blog'>Blog</StyledLink>
                    </li>
                    <li ref={getInvolvedDropdownRef}>
                        <Button
                            type='button'
                            onClick={toggleGetInvolvedDropdown}
                        >
                            Get Involved
                            {isGetInvolvedDropdownVisible ? (
                                <IoIosArrowUp
                                    color={
                                        stylingConstants.colours.blue2Percent30
                                    }
                                    // This ensures that arrow is inline with text.
                                    style={{ verticalAlign: 'bottom' }}
                                />
                            ) : (
                                <IoIosArrowDown
                                    color={
                                        stylingConstants.colours.blue2Percent30
                                    }
                                    // This ensures that arrow is inline with text.
                                    style={{ verticalAlign: 'bottom' }}
                                />
                            )}
                        </Button>
                        <Dropdown
                            isVisible={isGetInvolvedDropdownVisible}
                            dropdownName='Get Involved'
                        />
                    </li>
                </Ul>
            </Nav>
            <Account />
        </Container>
    );
};

export default Navbar;
