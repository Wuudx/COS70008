import styled from "styled-components";
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

// TODO: FORM VALIDATION (maybe use react-hook-form?)
const ContactUsForm = () => {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <FlexContainer>
            <Form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor="name">YOUR NAME (required)</label>
                    <br />
                    <Input type="text" id="name" required />
                </p>
                <p>
                    <label htmlFor="email">YOUR EMAIL (required)</label>
                    <br />
                    <Input type="text" id="email" required />
                </p>
                <p>
                    <label htmlFor="subject">SUBJECT</label>
                    <br />
                    <Input type="text" id="subject" required />
                </p>
                <p>
                    <label htmlFor="message">MESSAGE</label>
                    <br />
                    <TextArea id="message" />
                </p>
                <SubmitInput
                    width="40%"
                    height="3em"
                    type="submit"
                    value="Send Message"
                    required
                />
            </Form>
        </FlexContainer>
    );
};
export default ContactUsForm;
