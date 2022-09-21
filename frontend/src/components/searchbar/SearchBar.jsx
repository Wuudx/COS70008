import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import SearchButton from "./SearchButton";
import SearchInput from "./SearchInput";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: ${stylingConstants.sizes.searchBarHeight};
`;

const SearchBarForm = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const SearchBar = () => {
    return (
        <FlexContainer>
            <SearchBarForm>
                <SearchInput />
                <SearchButton />
            </SearchBarForm>
        </FlexContainer>
    )
}


export default SearchBar