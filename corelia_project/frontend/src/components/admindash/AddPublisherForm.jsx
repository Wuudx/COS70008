import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { addPublisher } from "../../api/publishers";
import stylingConstants from "../../utils/styling";

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: lato-bold;
    color: #3a3b3c;
    width: 100%;
`;

const Form = styled.form`
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const Input = styled.input`
    width: 100%;
    height: 3em;
    background: #f5f5f5;
    border: none;
    border-radius: 0.5em;
    padding: 1em;
    margin-top: 0.7em;
    font-family: lato-regular;
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 9em;
    background: #f5f5f5;
    border: none;
    border-radius: 0.5em;
    padding: 1em;
    margin-top: 0.7em;
    font-family: lato-regular;
`;

const SubmitInput = styled.input.attrs({ type: "submit" })`
    width: 100%;
    height: 3em;
    font-family: lato-bold;
    background: ${stylingConstants.colours.blue1Percent80};
    border: none;
    color: white;
    border-radius: 0.5em;
    margin-bottom: ${stylingConstants.sizes.gapFromFooterToEndOfContent};
    cursor: pointer;
    &:hover {
        background: ${stylingConstants.colours.blue1Percent100};
    }
`;

const AddPublisherForm = ({ isVisible }) => {
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleAddPublisher(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            await addPublisher({ name: name });
            toast.success("Succesfully added publisher!");
        } catch (error) {
            toast.error("Could not add publisher!");
        } finally {
            setIsLoading(false);
        }
    }

    let content;
    if (!isVisible) {
        content = "";
    } else {
        let submitButton;
        if (isLoading) {
            submitButton = (
                <ScaleLoader color={stylingConstants.colours.blue1} />
            );
        } else {
            submitButton = <SubmitInput type="submit" value="Add Publisher" />;
        }
        content = (
            <FlexContainer>
                <Form onSubmit={handleAddPublisher}>
                    <Input
                        type="text"
                        placeholder="Publisher Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {submitButton}
                </Form>
            </FlexContainer>
        );
    }
    return content;
};

export default AddPublisherForm;
