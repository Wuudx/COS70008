import styled from "styled-components";
import stylingConstants from "../../utils/styling";

const Input = styled.input`
    height: ${stylingConstants.sizes.searchInputHeight};
    width: 300px;
    border: none;
    border-radius: 1.625rem 0rem 0rem 1.625rem;
    padding: 0 1rem 0 1rem;
    background: #f5f5f5;
    font-family: ${stylingConstants.fonts.searchBar};
    font-size: 1.1rem;

    &:focus {
        outline: none;
    }
`;


const SearchInput = () => {
  return (
    <Input type="text" placeholder="Search ..." />
  )
}
export default SearchInput