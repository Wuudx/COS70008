import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { createComment } from "../../../api/forum";
import { useAuthState } from "../../../context";
import RoundedImage from "../../../shared-styled-components/RoundedImage";
import SubmitInput from "../../../shared-styled-components/SubmitInput";
import stylingConstants from "../../../utils/styling";

const FlexContainer = styled.div`
    margin-top: 0.5em;
    display: flex;
    gap: 0.5em;
    width: 100%;
    form {
        width: 100%;
    }
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5em;
`;

const TextArea = styled.textarea`
    background-color: ${stylingConstants.colours.blue2Percent10};
    border-radius: 0.5em;
    width: 50%;
    padding: 0.5em;
    font-family: lato-regular;
`;

const CommentForm = ({ postId, profilePicture, addComment }) => {
    const user = useAuthState();
    const profileImage =
        "../../../../static/users/images/Default_profile_pic.png";
    const [isLoading, setIsLoading] = useState(false);
    const [commentContent, setCommentContent] = useState("");

    async function handleCreateComment(e) {
        e.preventDefault();
        setIsLoading(true);
        const newComment = {
            id: uuidv4(),
            user: user.user.id,
            content: commentContent,
            date_posted: new Date().toString(),
            author_name: user.user.username,
            post: postId,
        };
        try {
            await createComment(newComment);
            addComment(newComment);
            toast.success("Succesfully commented!");
        } catch (error) {
            toast.error(`Error ${error.message}`);
        } finally {
            setIsLoading(false);
        }
    }

    let content;
    if (!user.user) {
        content = (
            <p>
                Want to contribute? Press <Link to="/login">here</Link> to
                comment!
            </p>
        );
    } else {
        let submitButton;
        if (isLoading) {
            submitButton = (
                <ScaleLoader color={stylingConstants.colours.blue1} />
            );
        } else {
            submitButton = (
                <SubmitInput
                    type="submit"
                    width="20%"
                    height="1.8em"
                    value="Comment"
                />
            );
        }
        content = (
            <>
                <RoundedImage
                    width="30px"
                    height="30px"
                    src={profileImage}
                    alt="Profile Picture"
                />
                <Form onSubmit={handleCreateComment}>
                    <TextArea
                        placeholder={`comment as ${user.user.username}`}
                        value={commentContent}
                        onChange={(e) => setCommentContent(e.target.value)}
                    />
                    {submitButton}
                </Form>
            </>
        );
    }

    return <FlexContainer>{content}</FlexContainer>;
};
export default CommentForm;
