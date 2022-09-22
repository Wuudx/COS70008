import styled from "styled-components";
import RoundedImage from "../../shared-styled-components/RoundedImage";
import SubmitInput from "../../shared-styled-components/SubmitInput";
import stylingConstants from "../../utils/styling";

// Having both of these elements with vertica align of bottom centers them.
const Form = styled.form`
    display: flex;
    gap: 1em;
    margin-left: 4em;
    width: 100%;
`;

const FormItemsFlexContainer = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

// TODO: Fix issue where button looks squeezed!
const AttachImageButton = styled.div`
    // These (height, width, line-height)are all the same to ensure that text inside is vertically and horizontally centered
    height: 31px;
    line-height: 31px;
    width: 31px;

    font-size: 2em;
    font-weight: bold;
    border-radius: 50%;
    color: ${stylingConstants.colours.blue2Percent80};
    border: 1px solid ${stylingConstants.colours.blue2Percent80};
    text-align: center;
    cursor: pointer;
`;

const TextArea = styled.textarea`
    border-radius: 1em;
    padding: 1em;
    background: ${stylingConstants.colours.blue2Percent10};
    font-family: lato-regular;
`;

// TODO: Add submit button (not sure where, guidelines are confusing)
const CreatePostForm = () => {
    return (
        <Form>
            <RoundedImage
                width="30px"
                height="30px"
                src="https://i.picsum.photos/id/634/200/200.jpg?hmac=3WUmj9wMd1h3UZICk1C5iydU5fixjx0px9jw-LBezgg"
                alt="Profile Picture"
            />
            <FormItemsFlexContainer>
                <TextArea type="text" placeholder="Create Post" />
                <SubmitInput type="submit" value="Submit" />
            </FormItemsFlexContainer>
            <AttachImageButton>+</AttachImageButton>
        </Form>
    );
};
export default CreatePostForm;
