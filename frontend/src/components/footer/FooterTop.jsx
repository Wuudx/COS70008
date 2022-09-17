import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import Navbar from "./Navbar";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    height: 10vh;
    border-top: 3px solid ${stylingConstants.colours.blue1percent80};
`;

const FooterTop = () => {
    return (
        <Container>
            <Navbar />
        </Container>
    );
};

export default FooterTop;
