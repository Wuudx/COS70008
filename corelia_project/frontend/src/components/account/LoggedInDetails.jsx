import React from 'react';
import styled from 'styled-components';
import { useAuthState } from '../../context/context';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useRef } from 'react';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';
import AccountDropdown from './AccountDropdown';

const Container = styled.div``;

const AccountDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 5px 20px;
    cursor: pointer;
    user-select: none;
`;

const LoggedInDetails = () => {
    const dropdownRef = useRef(null);
    const auth = useAuthState();
    const [isOpen, toggleIsOpen] = useDetectOutsideClick(dropdownRef, false);
    const toggleDropdown = () => toggleIsOpen(!isOpen);

    return (
        <Container ref={dropdownRef}>
            <AccountDiv onClick={toggleDropdown}>
                <div>Welcome {auth.user.username}</div>
                <IoIosArrowDown size='1.75em' />
            </AccountDiv>
            <AccountDropdown isOpen={isOpen} />
        </Container>
    );
};
export default LoggedInDetails;
