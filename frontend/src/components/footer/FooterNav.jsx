import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const Container = styled.div`
    background: white;
    height: 10vh;
    border-top: 3px solid ${stylingConstants.colours.blue1percent80};
`;

const FooterNav = () => {
    return <Container></Container>;
};

export default FooterNav;
