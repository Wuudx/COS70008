import React, { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';
import { addBlog } from '../../api/blogs';
import useFetchOnPageLoad from '../../hooks/useFetchOnPageLoad';
import stylingConstants from '../../utils/styling';

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

const SubmitInput = styled.input.attrs({ type: 'submit' })`
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

const AddBlogForm = ({ isVisible }) => {
    const [author, setAuthor] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [title, setTitle] = useState('');
    const [votes, setVotes] = useState(0);

    const [isLoading, setIsLoading] = useState(false);
    const [isFormValid, setIsFormValid] = useState(true);

    async function handleAddBlog(e) {
        e.preventDefault();
        const newBlog = {
            author: author,
            content: blogContent,
            title: title,
            votes: votes,
        };

        setIsLoading(true);
        try {
            await addBlog(newBlog);
            toast.success('Successfully added new blog!');
        } catch (error) {
            toast.error('Could not add blog!');
        } finally {
            setIsLoading(false);
        }
    }

    let content;
    if (!isVisible) {
        content = '';
    } else {
        let submitButton;
        if (isLoading) {
            submitButton = (
                <ScaleLoader color={stylingConstants.colours.blue1} />
            );
        } else {
            submitButton = <SubmitInput type='submit' value='Add Blog' />;
        }
        content = (
            <FlexContainer>
                <Form onSubmit={handleAddBlog}>
                    <Input
                        type='number'
                        placeholder='User ID'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                    <Input
                        type='text'
                        placeholder='Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <TextArea
                        placeholder='Blog Content'
                        value={blogContent}
                        onChange={(e) => setBlogContent(e.target.value)}
                    />
                    <Input
                        type='number'
                        placeholder='Number of Votes'
                        value={votes}
                        onChange={(e) => setVotes(e.target.value)}
                        required
                    />
                    {submitButton}
                </Form>
            </FlexContainer>
        );
    }

    return content;
};
export default AddBlogForm;
