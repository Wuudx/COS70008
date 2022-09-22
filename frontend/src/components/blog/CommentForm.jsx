import styled from "styled-components";
import RoundedImage from "../../shared-styled-components/RoundedImage";
import SubmitInput from "../../shared-styled-components/SubmitInput";
import stylingConstants from "../../utils/styling";

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

const CommentForm = ({ profilePicture }) => {
    return (
        <FlexContainer>
            <RoundedImage
                width="30px"
                height="30px"
                src={profilePicture}
                alt="Profile Picture"
            />
            <Form>
                <TextArea />
                <SubmitInput width="20%" height="1.8em" value="Comment" />
            </Form>
        </FlexContainer>
    );
};
export default CommentForm;
