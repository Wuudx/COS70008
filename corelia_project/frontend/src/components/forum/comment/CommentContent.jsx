import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { editComment } from "../../../api/forum";
import SubmitInput from "../../../shared-styled-components/SubmitInput";
import TextArea from "../../../shared-styled-components/TextArea";
import stylingConstants from "../../../utils/styling";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin: 16px 0px;
    gap: 1em;
`;

const CommentContent = ({
    commentId,
    content,
    isEditing,
    toggleIsEditing,
    editCommentFrontend,
}) => {
    const [newContent, setNewContent] = useState(content);

    const [isLoading, setIsLoading] = useState(false);

    async function handleEdit(e) {
        e.preventDefault();
        const wantEdit = confirm("Are you sure you want to edit this comment?");
        if (!wantEdit) {
            return;
        }
        setIsLoading(true);
        try {
            await editComment(commentId, newContent);
            editCommentFrontend(commentId, newContent);
            toggleIsEditing();
            toast.success("Succesfully edited comment!");
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
        renderContent = <p>{newContent}</p>;
    }

    return renderContent;
};
export default CommentContent;
