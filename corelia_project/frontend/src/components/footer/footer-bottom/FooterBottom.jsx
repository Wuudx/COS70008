import styled from 'styled-components';
import footerLogo from '../../../../static/images/footer-logo.png';
import stylingConstants from '../../../utils/styling';
import CopyrightMessage from './CopyrightMessage';
import SiteNav from './SiteNav';
import SocialMediaNav from './SocialMediaNav';
import React from 'react';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: 25vh;
    width: 100%;
    background-color: ${stylingConstants.colours.blue1Percent80};
    padding: 0 30px;
`;

const FooterBottom = () => {
    return (
        <Container>
            <CopyrightMessage />
            <SiteNav />
            <SocialMediaNav />
            <img src={footerLogo} alt='Corelia Project Footer Logo' />
        </Container>
    );
};

export default FooterBottom;
