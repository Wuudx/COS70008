import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../../utils/styling";
import ShareButton from "./ShareButton";

const StyledLink = styled(Link)`
    color: ${stylingConstants.colours.blue2Percent100};
    text-decoration: none;
    &:hover {
        border-bottom: 3px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

const CommentAndShare = ({ numComments, postId }) => {
    const iconStyle = {
        verticalAlign: "middle",
    };

    return (
        <span>
            <StyledLink to={`/forum/post/${postId}/comments`}>
                <FaCommentAlt style={iconStyle} /> {numComments} Comments
            </StyledLink>{" "}
            | <ShareButton postId={postId} style={iconStyle} />
        </span>
    );
};
export default CommentAndShare;
