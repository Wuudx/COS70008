import React from "react";
import styled from "styled-components";
import footerLogo from "../../../../static/images/footer-logo.png";
import stylingConstants from "../../../utils/styling";
import CopyrightMessage from "./CopyrightMessage";
import SiteNav from "./SiteNav";
import SocialMediaNav from "./SocialMediaNav";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    height: fit-content;
    width: 100%;
    background-color: ${stylingConstants.colours.blue1Percent80};
    padding: 30px;
    flex-wrap: wrap;
`;

const FooterBottom = () => {
    return (
        <Container>
            <CopyrightMessage />
            <SiteNav />
            <SocialMediaNav />
            <img src={footerLogo} alt="Corelia Project Footer Logo" />
        </Container>
    );
};

export default FooterBottom;
