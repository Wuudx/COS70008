import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import { contactUs } from "../../api/contact-us";
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
    width: 40%;
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

const ContactUsForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        const data = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        };
        try {
            await contactUs(data);
            toast.success("Succesfully contacted!");
        } catch (error) {
            toast.error("Failed to contact! Please try again later.");
        } finally {
            setIsLoading(false);
        }
    }

    let submitButton;
    if (isLoading) {
        submitButton = <ScaleLoader color={stylingConstants.colours.blue1} />;
    } else {
        submitButton = (
            <SubmitInput
                width="40%"
                height="3em"
                type="submit"
                value="Send Message"
            />
        );
    }

    return (
        <FlexContainer>
            <Form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">YOUR NAME (required)</label>
                    <br />
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="email">YOUR EMAIL (required)</label>
                    <br />
                    <Input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="subject">SUBJECT</label>
                    <br />
                    <Input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </p>
                <p>
                    <label htmlFor="message">MESSAGE</label>
                    <br />
                    <TextArea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </p>
                {submitButton}
            </Form>
        </FlexContainer>
    );
};
export default ContactUsForm;
