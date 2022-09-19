import { Link } from "react-router-dom";
import styled from "styled-components";
import useSearchQuery from "../../../hooks/useSearchQuery";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    vertical-align: middle;
    font-family: lato-bold;
`;

const FilterLetter = ({ letter }) => {
    const searchQuery = useSearchQuery("q");

    return (
        <StyledLink
            to={`/discover-composers/?q=${searchQuery}&letter=${letter}/`}
        >
            {letter}
        </StyledLink>
    );
};

export default FilterLetter;
