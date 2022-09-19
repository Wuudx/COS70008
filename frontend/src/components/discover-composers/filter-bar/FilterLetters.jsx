import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../../hooks/useSearchQuery";
import stylingConstants from "../../../utils/styling";
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
`;

const Li = styled.li`
    &: hover {
        background: ${stylingConstants.colours.blue2Percent100};
    }
    height: 100%;
    width: 1.5em;
    // Important so that text is centered inside div.
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const FilterLetters = () => {
    const navigate = useNavigate();
    const searchQuery = useSearchQuery("q");

    function navigateToFilter(letter) {
        navigate(`?q=${searchQuery}&letter=${letter}/`);
    }

    return (
        <Nav>
            <Ul>
                {ALPHABET.split("").map((letter) => (
                    <Li onClick={() => navigateToFilter(letter)}>
                        <FilterLetter key={letter} letter={letter} />
                    </Li>
                ))}
            </Ul>
        </Nav>
    );
};

export default FilterLetters;
