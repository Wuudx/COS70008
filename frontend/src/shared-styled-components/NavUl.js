import styled from "styled-components";

const NavUl = styled.ul`
    display: flex;
    list-style: none;
    gap: ${(props) => props.gap};
    // We need position relative here so that width 100% works on child ul!!!
    li {
        position: relative;
    }
`;

export default NavUl;
