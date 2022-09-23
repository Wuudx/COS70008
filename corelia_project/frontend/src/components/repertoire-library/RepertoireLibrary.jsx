import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: ${stylingConstants.sizes.navbarHeight} + 10px;
`;

const RepertoireLibrary = () => {
    return (
        <FlexContainer>
            <h1>Hello</h1>
        </FlexContainer>
    );
};

export default RepertoireLibrary;