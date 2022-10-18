import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { ScaleLoader } from "react-spinners";
import stylingConstants from "../../utils/styling";

const DeleteContentButton = ({
    contentId,
    apiDeleteContent,
    frontendDeleteContent,
}) => {
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

    async function handleDeleteContent(contentId) {
        const wantDelete = confirm("Are you sure you want to delete?");
        if (!wantDelete) {
            return;
        }
        setIsLoading(true);
        try {
            await apiDeleteContent(contentId);
            frontendDeleteContent(contentId);
            toast.success("Succesfully deleted!");
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
                onClick={() => handleDeleteContent(contentId)}
                style={deleteButtonStyle}
            />
        );
    }

    return deleteButton;
};
export default DeleteContentButton;
