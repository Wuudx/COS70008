import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuthState } from "../../context";
import RoundedImage from "../../shared-styled-components/RoundedImage";
import SubmitInput from "../../shared-styled-components/SubmitInput";
import stylingConstants from "../../utils/styling";

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

// TODO: Add submit button (not sure where, guidelines are confusing)
const CreatePostForm = () => {
    const user = useAuthState();
    let content;
    if (!user.user) {
        content = (
            <p>
                Want to contribute? Press <Link to="/join-corelia">here</Link>{" "}
                to post!
            </p>
        );
    } else {
        content = (
            <>
                <RoundedImage
                    width="30px"
                    height="30px"
                    src="https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                    alt="Profile Picture"
                />
                <FormItemsFlexContainer>
                    <TextArea
                        type="text"
                        placeholder={`Create post as ${user.user.username}`}
                    />
                    <SubmitInput
                        width="40%"
                        height="3em"
                        type="submit"
                        value="Submit"
                    />
                </FormItemsFlexContainer>
                <AttachImageButton>+</AttachImageButton>
            </>
        );
    }

    return <Form>{content}</Form>;
};
export default CreatePostForm;
