import styled from "styled-components";
import footerLogo from "../../../assets/images/footer-logo.png";
import stylingConstants from "../../../utils/styling";
import CopyrightMessage from "./CopyrightMessage";
import HouseKeepingNav from "./HouseKeepingNav";
import SocialMediaNav from "./SocialMediaNav";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    height: 25vh;
    width: 100%;
    background-color: ${stylingConstants.colours.blue1percent80};
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
