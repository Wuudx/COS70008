import React from "react";
import { IoIosShareAlt } from "react-icons/io";
import stylingConstants from "../../../utils/styling";
import styled from "styled-components";

const Button = styled.button`
    color: ${stylingConstants.colours.blue2Percent100};
    cursor: pointer;
    background: white;
    border: none;
`;

const ShareButton = ({ postId }) => {
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
        <Button>
            <IoIosShareAlt onClick={() => share(shareData)} /> Share
        </Button>
    );
};

export default ShareButton;
