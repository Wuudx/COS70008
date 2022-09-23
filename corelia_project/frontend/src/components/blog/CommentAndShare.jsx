import { FaCommentAlt } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import React from "react";

const StyledLink = styled(Link)`
    color: ${stylingConstants.colours.blue2Percent100};
    text-decoration: none;
`;

const Button = styled.button`
    color: ${stylingConstants.colours.blue2Percent100};
    cursor: pointer;
    background: white;
    border: none;
`;

const CommentAndShare = ({ numComments, postId }) => {
    return (
        <span>
            <StyledLink to={`post/${postId}/comments`}>
                <FaCommentAlt /> {numComments} Comments
            </StyledLink>{" "}
            |{" "}
            <Button>
                <IoIosShareAlt /> Share
            </Button>
        </span>
    );
};
export default CommentAndShare;
