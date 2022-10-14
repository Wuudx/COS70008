import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { createPost } from "../../../api/forum";
import { useAuthState } from "../../../context";
import RoundedImage from "../../../shared-styled-components/RoundedImage";
import SubmitInput from "../../../shared-styled-components/SubmitInput";
import stylingConstants from "../../../utils/styling";

// Having both of these elements with vertica align of bottom centers them.
const Form = styled.form`
    display: flex;
    justify-content: center;
    gap: 1em;
    width: 100%;
    background: white;
    padding: 1em;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
`;

const FormItemsFlexContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

// TODO: Fix issue where button looks squeezed!
const AttachImageButton = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${stylingConstants.colours.blue2Percent80};
    border: 1px solid ${stylingConstants.colours.blue2Percent80};
    cursor: pointer;
    font-size: 2em;
    font-weight: bold;
`;

const TextArea = styled.textarea`
    border-radius: 1em;
    padding: 1em;
    background: ${stylingConstants.colours.blue2Percent10};
    font-family: lato-regular;
`;

// TODO: Update posts on frontend after getting from backend.
const CreatePostForm = ({ addNewPost }) => {
    const user = useAuthState();
    const [isLoading, setIsLoading] = useState(false);
    const [postContent, setPostContent] = useState("");
    const profileImage = '../../../../static/users/images/Default_profile_pic.png' 

    let content;

    if (!user.user) {
        content = (
            <p>
                Want to contribute? Press <Link to="/login">here</Link>{" "}
                to post!
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
                    width="40%"
                    height="3em"
                    type="submit"
                    value="Submit"
                />
            );
        }
        content = (
            <>
                <RoundedImage
                    width="30px"
                    height="30px"
                    src= {profileImage}
                    alt="Profile Picture"
                />
                <FormItemsFlexContainer>
                    <TextArea
                        type="text"
                        placeholder={`Create post as ${user.user.username}`}
                        value={postContent}
                        onChange={(e) => setPostContent(e.target.value)}
                    />
                    {submitButton}
                </FormItemsFlexContainer>
                <AttachImageButton>+</AttachImageButton>
            </>
        );
    }

    async function handleSubmitPost(e) {
        e.preventDefault();
        setIsLoading(true);
        const newPost = {
            user: user.user.id,
            content: postContent,
            date_posted: new Date().toString(),
            author_name: user.user.username,
        };
        try {
            await createPost(newPost);
            addNewPost(newPost);
            setPostContent("");
            toast.success("Succesfully created post!");
        } catch (error) {
            toast.error(`Error ${error}`);
        } finally {
            setIsLoading(false);
        }
    }

    return <Form onSubmit={handleSubmitPost}>{content}</Form>;
};
export default CreatePostForm;
