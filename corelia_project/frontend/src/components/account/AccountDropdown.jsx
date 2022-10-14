import React from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import { useAuthDispatch, logout, useAuth, useAuthState } from '../../context';
import { FiLogOut } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { GiClarinet} from 'react-icons/gi';

const DropdownContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 1;
    list-style: none;
    margin: 0px;
    padding: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 1em;
    font-family: ${stylingConstants.fonts.searchBar};
    color: white;
    background-color: ${stylingConstants.colours.blue1Percent100};
`;

const DropdownItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    width: 100%;
    padding: 5px 20px;
`;

const AccountDropdown = ({ isOpen }) => {
    const dispatch = useAuthDispatch();

    const handleLogout = () => {
        logout(dispatch);
    };

    const handleProfileClick = () => {
        window.location.href = '/profile';
    };

    const user = useAuthState();

    if (isOpen) {
        return (
            <DropdownContainer>
                <DropdownItem onClick={handleProfileClick}>
                    <CgProfile size='1.5em' style={{ marginRight: '0.5em' }} />
                    Profile
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                    <FiLogOut size='1.5em' style={{ marginRight: '0.5em' }} />
                    Logout
                </DropdownItem>
                {user.user.is_staff ? (
                    <DropdownItem onClick={() => (window.location.href = '/admin-dashboard')}>
                        <GiClarinet size='1.5em' style={{ marginRight: '0.5em' }} />
                        Admin
                    </DropdownItem>
                ) : null}
            </DropdownContainer>
        );
    } else {
        return '';
    }
};
export default AccountDropdown;
