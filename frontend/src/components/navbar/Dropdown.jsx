import { Link } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";

// TODO: The border top on dropdown is a bit shorter than the border bottom on hover. Fix this!!

const Ul = styled.ul`
    position: absolute;
    padding: 0px;
    list-style: none;
    border-top: 3px solid ${stylingConstants.colours.blue2Percent30};
    background-color: white;
    padding: 10px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    li {
        margin: 5px 0px;
    }
    li a {
        text-decoration: none;
        font-family: lato-regular;
        color: ${stylingConstants.colours.blue2};
    }
`;

const Dropdown = ({ isVisible, dropdownName }) => {
    let content = "";
    if (!isVisible) {
        return content;
    }

    if (dropdownName === "Explore Reportoire") {
        content = (
            <Ul>
                <li>
                    <Link to="/watch-listen/">Watch/Listen</Link>
                </li>
                <li>
                    <Link to="/reportoire-library/">Reportoire Library</Link>
                </li>
            </Ul>
        );
    } else if (dropdownName === "Get Involved") {
        content = (
            <Ul>
                <li>
                    <Link to="/join-corelia/">Join Corelia</Link>
                </li>
                <li>
                    <Link to="/contact/">Contact</Link>
                </li>
            </Ul>
        );
    }

    return content;
};

export default Dropdown;
