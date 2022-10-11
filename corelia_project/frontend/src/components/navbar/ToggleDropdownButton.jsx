import React from "react";
import styled from "styled-components";
import NavButton from "../../shared-styled-components/NavButton";
import stylingConstants from "../../utils/styling";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Button = styled(NavButton)`
    font-family: lato-bold;
    border-bottom: 3px solid white; // So that the navbar does not jump up on hover.
    &:hover {
        border-bottom: 3px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

const ToggleDropdownButton = ({
    buttonText,
    toggleDropdownFunction,
    isDropdownVisible,
}) => {
    return (
        <Button type="button" onClick={toggleDropdownFunction}>
            {buttonText}
            {isDropdownVisible ? (
                <IoIosArrowUp
                    color={stylingConstants.colours.blue2Percent30}
                    // This ensures that arrow is inline with text.
                    style={{ verticalAlign: "bottom" }}
                />
            ) : (
                <IoIosArrowDown
                    color={stylingConstants.colours.blue2Percent30}
                    // This ensures that arrow is inline with text.
                    style={{ verticalAlign: "bottom" }}
                />
            )}
        </Button>
    );
};

export default ToggleDropdownButton;
