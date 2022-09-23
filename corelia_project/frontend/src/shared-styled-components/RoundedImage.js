import styled from "styled-components";

const RoundedImage = styled.img`
    clip-path: circle();
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`;

export default RoundedImage;
