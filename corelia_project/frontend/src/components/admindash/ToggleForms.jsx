import React, { useState } from "react";
import styled from "styled-components";
import AddComposerForm from "./AddComposerForm";

const FlexContainer = styled.div`
    display: flex;
`;

const ToggleForms = () => {
    const [isAddComposerForm, setIsAddComposerForm] = useState(true);
    const [isAddCompositionForm, setIsAddCompositionForm] = useState(false);

    function toggleForm(formType) {
        switch (formType) {
            case "composer":
                setIsAddComposerForm(true);
                setIsAddCompositionForm(false);
                break;
            case "composition":
                setIsAddComposerForm(false);
                setIsAddCompositionForm(true);
                break;
        }
    }

    return (
        <>
            <FlexContainer>
                <button type="button" onClick={() => toggleForm("composer")}>
                    Add Composer
                </button>
                <button type="button" onClick={() => toggleForm("composition")}>
                    Add Composition
                </button>
            </FlexContainer>
            <AddComposerForm isVisible={isAddComposerForm} />
        </>
    );
};
export default ToggleForms;
