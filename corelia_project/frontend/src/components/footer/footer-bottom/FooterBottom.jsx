import styled from "styled-components";
import footerLogo from "../../../../static/images/footer-logo.png";
import stylingConstants from "../../../utils/styling";
import CopyrightMessage from "./CopyrightMessage";
import HouseKeepingNav from "./HouseKeepingNav";
import SocialMediaNav from "./SocialMediaNav";
import React from "react";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 25vh;
    width: 100%;
    background-color: ${stylingConstants.colours.blue1Percent80};
`;

const FooterBottom = () => {
    return (
        <Container>
            <CopyrightMessage />
            <HouseKeepingNav />
            <SocialMediaNav />
            <img src={footerLogo} alt="Corelia Project Footer Logo" />
        </Container>
    );
};

export default FooterBottom;
