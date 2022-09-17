import styled from "styled-components";

const NavUl = styled.ul`
    display: flex;
    list-style: none;
    gap: ${(props) => props.gap};
`;

export default NavUl;
