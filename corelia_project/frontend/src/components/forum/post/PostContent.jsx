import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { editPost } from "../../../api/forum";
import SubmitInput from "../../../shared-styled-components/SubmitInput";
import TextArea from "../../../shared-styled-components/TextArea";
import stylingConstants from "../../../utils/styling";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 16px 0px;
    gap: 1em;
`;

const PostContent = ({
    postId,
    content,
    isEditing,
    toggleIsEditing,
    editPostFrontend,
}) => {
    const [newContent, setNewContent] = useState(content);

    // If the user edits a post while viewing the comments, we do not have access to editPostFrontend. Thus, we will instead
    // temporarily render the new content if the api request was succesfull until the user refreshes the page and the
    // state is updated.
    const [contentAfterEditing, setContentAfterEditing] = useState(content);

    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    let isViewingComments;
    if ("postId" in params) {
        isViewingComments = true;
    } else {
        isViewingComments = false;
    }

    async function handleEdit(e) {
        e.preventDefault();
        const wantEdit = confirm("Are you sure you want to edit this post?");
        if (!wantEdit) {
            return;
        }
        setIsLoading(true);
        try {
            await editPost(postId, newContent);
            if (isViewingComments) {
                setContentAfterEditing(newContent);
            } else {
                editPostFrontend(postId, newContent);
            }
            toggleIsEditing();
            toast.success("Succesfully edited post!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    let submitButton;
    if (isLoading) {
        submitButton = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else {
        submitButton = <SubmitInput width="40%" height="2em" value="Edit" />;
    }

    let renderContent;
    if (isEditing) {
        renderContent = (
            <Form onSubmit={handleEdit}>
                <TextArea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                ></TextArea>
                {submitButton}
            </Form>
        );
    } else {
        renderContent = <p>{contentAfterEditing}</p>;
    }

    return renderContent;
};
export default PostContent;
