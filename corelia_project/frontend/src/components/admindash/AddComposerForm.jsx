import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { addComposer } from "../../api/composers";
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

const AddComposerForm = ({ isVisible }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [yearOfBirth, setYearOfBirth] = useState("");
    const [yearOfDeath, setYearOfDeath] = useState("");
    const [biography, setBiography] = useState("");
    const [biographySource, setBiographySource] = useState("");
    const [website, setWebsite] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    async function handleAddComposer(e) {
        e.preventDefault();
        setIsLoading(true);
        const newComposer = {
            firstName: firstName,
            lastName: lastName,
            yearOfBirth: yearOfBirth,
            yearOfDeath: yearOfDeath,
            biography: biography,
            bio_source: biographySource,
            composer_website: website,
            nationality: -1,
        };
        try {
            await addComposer(newComposer);
            toast.success("Succesfully added composer!");
        } catch (error) {
            toast.error(error.message);
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
            submitButton = <SubmitInput type="submit" value="Add Composer" />;
        }
        content = (
            <FlexContainer>
                <Form onSubmit={handleAddComposer}>
                    <Input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Year of Birth"
                        value={yearOfBirth}
                        onChange={(e) => setYearOfBirth(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Year of Death"
                        value={yearOfDeath}
                        onChange={(e) => setYearOfDeath(e.target.value)}
                    />
                    <TextArea
                        placeholder="Biography"
                        value={biography}
                        onChange={(e) => setBiography(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Biography Source"
                        value={biographySource}
                        onChange={(e) => setBiographySource(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                    />
                    {submitButton}
                </Form>
            </FlexContainer>
        );
    }

    return content;
};
export default AddComposerForm;
