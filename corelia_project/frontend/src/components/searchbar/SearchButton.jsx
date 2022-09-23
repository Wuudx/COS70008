import SearchLogo from "../../assets/images/search-logo-black.png";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import React from "react";

const ButtonIcon = styled.img`
    width: ${stylingConstants.sizes.searchButtonIconWidth};
    margin: none;
    border: none;
    filter: invert(100%);
`;

const Button = styled.button`
    height: ${stylingConstants.sizes.searchInputHeight};
    background-color: ${stylingConstants.colours.blue1Percent100};
    border: none;
    cursor: pointer;
    border-radius: 0rem 1.625rem 1.625rem 0rem;
    padding: 0 1rem 0 1rem;
    &:hover {
        background-color: ${stylingConstants.colours.blue1Percent80};
        }
`;

// const 


const SearchButton = () => {
  return (
    <Button type="submit"><ButtonIcon src={SearchLogo} alt="Search Logo" /></ Button>
  )
}
export default SearchButton