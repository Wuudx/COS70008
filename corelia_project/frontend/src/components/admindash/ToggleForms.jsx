import React, { useState } from 'react';
import styled from 'styled-components';
import stylingConstants from '../../utils/styling';
import AddBlogForm from './AddBlogForm';
import AddComposerForm from './AddComposerForm';
import AddCompositionForm from './AddCompositionForm';
import AddPublisherForm from './AddPublisherForm';

const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 2em;
    justify-content: center;
    #focused {
        border: 2px solid black;
    }
    margin-top: 2em;
`;

const Button = styled.button`
    cursor: pointer;
    background: ${stylingConstants.colours.blue2};
    color: white;
    border: 1px solid white;
    padding: 1em;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
`;

const ToggleForms = () => {
    const [isAddComposerForm, setIsAddComposerForm] = useState(true);
    const [isAddCompositionForm, setIsAddCompositionForm] = useState(false);
    const [isAddPublisherForm, setIsAddPublisherForm] = useState(false);
    const [isAddBlogForm, setIsAddBlogForm] = useState(false);

    function toggleForm(formType) {
        switch (formType) {
            case 'composer':
                setIsAddComposerForm(true);
                setIsAddCompositionForm(false);
                setIsAddPublisherForm(false);
                setIsAddBlogForm(false);
                break;
            case 'composition':
                setIsAddComposerForm(false);
                setIsAddCompositionForm(true);
                setIsAddPublisherForm(false);
                setIsAddBlogForm(false);
                break;
            case 'publisher':
                setIsAddComposerForm(false);
                setIsAddCompositionForm(false);
                setIsAddPublisherForm(true);
                setIsAddBlogForm(false);
                break;
            case 'blog':
                setIsAddComposerForm(false);
                setIsAddCompositionForm(false);
                setIsAddPublisherForm(false);
                setIsAddBlogForm(true);
        }
    }

    function getId(buttonName) {
        switch (buttonName) {
            case 'composer':
                if (isAddComposerForm) {
                    return 'focused';
                }
                break;
            case 'composition':
                if (isAddCompositionForm) {
                    return 'focused';
                }
                break;
            case 'publisher':
                if (isAddPublisherForm) {
                    return 'focused';
                }
                break;
            case 'blog':
                if (isAddBlogForm) {
                    return 'focused';
                }
                break;
        }
    }

    return (
        <>
            <FlexContainer>
                <Button
                    id={getId('composer')}
                    type='button'
                    onClick={() => toggleForm('composer')}
                >
                    Add Composer
                </Button>
                <Button
                    id={getId('composition')}
                    type='button'
                    onClick={() => toggleForm('composition')}
                >
                    Add Composition
                </Button>
                <Button
                    id={getId('publisher')}
                    type='button'
                    onClick={() => toggleForm('publisher')}
                >
                    Add Publisher
                </Button>
                <Button
                    id={getId('blog')}
                    type='button'
                    onClick={() => toggleForm('blog')}
                >
                    Add Blog
                </Button>
            </FlexContainer>
            <AddComposerForm isVisible={isAddComposerForm} />
            <AddCompositionForm isVisible={isAddCompositionForm} />
            <AddPublisherForm isVisible={isAddPublisherForm} />
            <AddBlogForm isVisible={isAddBlogForm} />
        </>
    );
};
export default ToggleForms;
