import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import styled from "styled-components";
import stylingConstants from "../../../utils/styling";

const Button = styled.button`
    color: ${stylingConstants.colours.blue2Percent100};
    cursor: pointer;
    background: white;
    border: none;
    padding: 0px;
    // So that post doesn't "twitch" when overed over. Make sure colour here is same as background colour!
    border-bottom: 3px solid white;
    &:hover {
        border-bottom: 3px solid ${stylingConstants.colours.blue2Percent30};
    }
`;

const ShareButton = ({ postId, style }) => {
    const shareData = {
        title: "Corelia Project Forum Post",
        text: "Check out this corelia project forum post!",
        url: `http://localhost:8000/forum/post/${postId}/comments`,
    };

    async function share(shareData) {
        try {
            await navigator.share(shareData);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Button onClick={() => share(shareData)}>
            <IoIosShareAlt style={style} /> Share
        </Button>
    );
};

export default ShareButton;
