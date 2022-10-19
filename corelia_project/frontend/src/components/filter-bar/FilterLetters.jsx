import React from "react";
import styled from "styled-components";
import FilterLetter from "./FilterLetter";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Nav = styled.nav`
    height: 100%;
    display: flex;
    align-items: center;
`;

const Ul = styled.ul`
    display: flex;
    list-style: none;
    height: 100%;
    flex-wrap: wrap;
    padding: 0px;
    margin: 0px;
`;

const FilterLetters = () => {
    return (
        <Nav>
            <Ul>
                {ALPHABET.split("").map((letter) => (
                    <FilterLetter key={letter} letter={letter} />
                ))}
            </Ul>
        </Nav>
    );
};

export default FilterLetters;
