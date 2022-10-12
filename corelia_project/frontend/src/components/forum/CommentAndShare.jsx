import React from "react";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import ShareButton from "./post/ShareButton";

const StyledLink = styled(Link)`
    color: ${stylingConstants.colours.blue2Percent100};
    text-decoration: none;
`;

const CommentAndShare = ({ numComments, postId }) => {
    return (
        <span>
            <StyledLink to={`post/${postId}/comments`}>
                <FaCommentAlt /> {numComments} Comments
            </StyledLink>{" "}
            | <ShareButton postId={postId} />
        </span>
    );
};
export default CommentAndShare;
