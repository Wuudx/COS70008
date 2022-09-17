import styled from "styled-components";
import FooterBottom from "./FooterBottom";
import FooterNav from "./FooterNav";

const StyledFooter = styled.footer`
    width: 100%;
    margin-top: auto;
`;

const Footer = () => {
    return (
        <StyledFooter>
            <FooterNav />
            <FooterBottom />
        </StyledFooter>
    );
};

export default Footer;
