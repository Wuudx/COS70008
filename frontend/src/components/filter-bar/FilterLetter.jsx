import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../hooks/useSearchQuery";
import stylingConstants from "../../utils/styling";

const Li = styled.li`
    &: hover {
        background-color: ${stylingConstants.colours.blue2Percent80};
    }
    background-color: ${(props) =>
        props.isFocused ? stylingConstants.colours.blue2Percent100 : ""};
    height: 100%;
    width: 1.5em;
    // Important so that text is centered inside div.
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    vertical-align: middle;
    font-family: lato-bold;
`;

const FilterLetter = ({ letter }) => {
    const navigate = useNavigate();
    const searchQuery = useSearchQuery("q");
    const letterFilter = useSearchQuery("letter");

    function navigateToFilter() {
        navigate(`?q=${searchQuery}&letter=${letter}`);
    }

    console.log(letter, letterFilter);
    const isLetterFocused = letter === letterFilter;
    console.log(isLetterFocused);

    return (
        <Li
            isFocused={isLetterFocused}
            onClick={() => navigateToFilter(letter)}
        >
            <StyledLink
                to={`/discover-composers/?q=${searchQuery}&letter=${letter}`}
            >
                {letter}
            </StyledLink>
        </Li>
    );
};

export default FilterLetter;
