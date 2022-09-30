import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Ul from '../../../shared-styled-components/NavUl';
import React from 'react';

const StyledLink = styled(Link)`
    font-family: lato-regular;
    text-decoration: none;
    color: white;
    white-space: nowrap;
`;

const SiteNav = () => {
    return (
        <nav>
            <Ul>
                <li>
                    <StyledLink to='/terms-of-service/'>
                        Terms of Service |
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/privacy-policy/'>
                        &nbsp;Privacy Policy |
                    </StyledLink>
                </li>
                <li>
                    <StyledLink to='/site-map/'>&nbsp;Site Map</StyledLink>
                </li>
            </Ul>
        </nav>
    );
};

export default SiteNav;
