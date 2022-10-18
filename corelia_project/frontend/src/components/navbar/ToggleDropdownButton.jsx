import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";
import NavButton from "../../shared-styled-components/NavButton";
import stylingConstants from "../../utils/styling";

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
    const arrowStyling = {
        // This ensures that arrow is inline with text.
        verticalAlign: "bottom",
        position: "absolute",
        top: "auto",
        right: "auto",
    };

    return (
        <Button type="button" onClick={toggleDropdownFunction}>
            {buttonText}
            {isDropdownVisible ? (
                <IoIosArrowUp
                    color={stylingConstants.colours.blue2Percent30}
                    style={arrowStyling}
                />
            ) : (
                <IoIosArrowDown
                    color={stylingConstants.colours.blue2Percent30}
                    style={arrowStyling}
                />
            )}
        </Button>
    );
};

export default ToggleDropdownButton;
