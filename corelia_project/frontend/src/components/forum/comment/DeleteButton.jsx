import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { ScaleLoader } from "react-spinners";
import { deleteComment } from "../../../api/forum";
import stylingConstants from "../../../utils/styling";

const DeleteButton = ({ commentId, deleteCommentFrontend }) => {
    const [isLoading, setIsLoading] = useState(false);

    const deleteButtonStyle = {
        position: "absolute",
        top: "1em",
        right: "1em",
        cursor: "pointer",
    };

    const loaderStyle = {
        position: "absolute",
        top: "1em",
        right: "1em",
    };

    async function handleDeleteComment() {
        console.log(commentId);
        const wantDelete = confirm(
            "Are you sure you want to delete this post?"
        );
        if (!wantDelete) {
            return;
        }
        setIsLoading(true);
        try {
            await deleteComment(commentId);
            deleteCommentFrontend(commentId);
            toast.success("Succesfully deleted comment!");
        } catch (error) {
            toast.error(`Error ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    let deleteButton;
    if (isLoading) {
        deleteButton = (
            <ScaleLoader
                color={stylingConstants.colours.blue1}
                style={loaderStyle}
            />
        );
    } else {
        deleteButton = (
            <AiFillDelete
                onClick={handleDeleteComment}
                style={deleteButtonStyle}
            />
        );
    }

    return deleteButton;
};

export default DeleteButton;
