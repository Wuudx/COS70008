import { Link } from "react-router-dom";
import styled from "styled-components";
import NavButton from "../../shared-styled-components/NavButton";
import stylingConstants from "../../utils/styling";

const Ul = styled.ul`
    display: flex;
    list-style: none;
    gap: 5em;
`;

const Button = styled(NavButton)`
    font-family: lato-regular;
    color: ${stylingConstants.colours.blue1percent80};
    border-bottom: 2px solid white;
    &:hover {
        border-bottom: 2px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

const StyledLink = styled(Link)`
    font-family: lato-regular;
    text-decoration: none;
    color: ${stylingConstants.colours.blue1percent80};
    &:hover {
        border-bottom: 2px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

// TODO: Implement dropdown for explore reportorire and get involved. The logic for this has already been implement for
// the navbar, so think about how to extract this logic to a custom hook.
const Navbar = () => {
    return (
        <nav>
            <Ul>
                <li>
                    <StyledLink to="/about/">About</StyledLink>
                </li>
                <li>
                    <StyledLink to="/disover-composers/">
                        Discover Composers
                    </StyledLink>
                </li>
                <li>
                    <Button type="button">Explore Reportoire</Button>
                </li>
                <li>
                    <StyledLink to="/blog/">Blog</StyledLink>
                </li>
                <li>
                    <Button type="button">Get Involved</Button>
                </li>
            </Ul>
        </nav>
    );
};

export default Navbar;
