import React, { useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { getComposers } from "../../api/composers";
import { addComposition } from "../../api/compositions";
import { getPublishers } from "../../api/publishers";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
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

const Select = styled.select`
    width: 100%;
    height: 3em;
    background: #f5f5f5;
    border: none;
    border-radius: 0.5em;
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

const AddCompositionForm = ({ isVisible }) => {
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [duration, setDuration] = useState("");
    const [recordingLink, setRecordingLink] = useState("");
    const [scoreLink, setScoreLink] = useState("");
    const [instruments, setInstruments] = useState("");
    const composerRef = useRef();
    const publisherRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);

    const [composers, composersIsLoading, composersError] = useFetchOnPageLoad(
        () => getComposers("http://localhost:8000/api/composers")
    );
    const [publishers, publishersIsLoading, publishersError] =
        useFetchOnPageLoad(getPublishers);

    async function handleAddComposition(e) {
        e.preventDefault();
        const composerId = composerRef.current.value;
        const publisherId = publisherRef.current.value;
        const newComposition = {
            name: name,
            composer: composerId,
            publisher: publisherId,
            year: year,
            duration: duration,
            instrument: instruments,
            recording_link: recordingLink,
            score_link: scoreLink,
        };
        setIsLoading(true);
        try {
            await addComposition(newComposition);
            toast.success("Successfully added new composition!");
        } catch (error) {
            toast.error("Could not add composition!");
        } finally {
            setIsLoading(false);
        }
    }

    let content;
    if (!isVisible) {
        content = "";
    } else {
        let selectComposer;
        if (composersIsLoading) {
            selectComposer = (
                <ScaleLoader color={stylingConstants.colours.blue1} />
            );
        } else if (composersError) {
            selectComposer = <div>Could not load composers</div>;
        } else {
            selectComposer = composers.map((composer) => (
                <option
                    key={composer.id}
                    value={`${composer.firstName} ${composer.lastName}`}
                >
                    {composer.firstName} {composer.lastName}
                </option>
            ));
        }
        let selectPublisher;
        if (publishersIsLoading) {
            selectPublisher = (
                <ScaleLoader color={stylingConstants.colours.blue1} />
            );
        } else if (publishersError) {
            selectPublisher = <div>Could not load publishers</div>;
        } else {
            selectPublisher = publishers.map((publisher) => (
                <option key={publisher.id} value={publisher.name}>
                    {publisher.name}
                </option>
            ));
        }
        let submitButton;
        if (isLoading) {
            submitButton = (
                <ScaleLoader color={stylingConstants.colours.blue1} />
            );
        } else {
            submitButton = (
                <SubmitInput type="submit" value="Add Composition" />
            );
        }
        content = (
            <FlexContainer>
                <Form onSubmit={handleAddComposition}>
                    <Input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <Input
                        type="number"
                        min="1000"
                        max="2022"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Duration"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        required
                    />
                    <Input
                        type="text"
                        placeholder="Recording Link"
                        value={recordingLink}
                        onChange={(e) => setRecordingLink(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Score Link"
                        value={scoreLink}
                        onChange={(e) => setScoreLink(e.target.value)}
                    />
                    <Input
                        type="text"
                        placeholder="Instruments (example: flute,guitar,...)"
                        value={instruments}
                        onChange={(e) => setInstruments(e.target.value)}
                    />
                    <Select ref={composerRef}>{selectComposer}</Select>
                    <Select ref={publisherRef}>{selectPublisher}</Select>
                    {submitButton}
                </Form>
            </FlexContainer>
        );
    }

    return content;
};
export default AddCompositionForm;
