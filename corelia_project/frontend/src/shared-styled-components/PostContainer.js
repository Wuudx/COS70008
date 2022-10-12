import styled from "styled-components";
import stylingConstants from "../utils/styling";

const PostContainer = styled.div`
    position: relative;
    background: white;
    width: ${(props) => props.postContainerWidth};
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    padding: 1em;
    p,
    span {
        font-family: lato-regular;
    }
`;

export default PostContainer;
