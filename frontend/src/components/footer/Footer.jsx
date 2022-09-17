import styled from "styled-components";
import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const StyledFooter = styled.footer`
    width: 100%;
    margin-top: auto;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterTop />
            <FooterBottom />
        </StyledFooter>
    );
};

export default Footer;
