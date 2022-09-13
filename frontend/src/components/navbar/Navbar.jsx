import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Navbar = () => {
    return (
        <Nav>
            <Link to="/home/">Home</Link> |
            <Link to="/composer-search/">Composer Search</Link> |
            <Link to="/blogs/">Blogs</Link> |<Link to="/forums/">Forum</Link> |
            <Link to="/contacts/">Contacts</Link>
        </Nav>
    );
};

export default Navbar;
