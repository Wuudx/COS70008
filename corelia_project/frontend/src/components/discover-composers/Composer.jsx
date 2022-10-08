import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5em;
`;

const Span = styled.span`
    font-family: lato-light;
`;

const Img = styled.img`
    position: relative; // So that z-index works.
    width: 200px;
    height: 200px;
`;

const ImageContainer = styled.div`
    position: relative; // So that position absolute works for first name.
    width: 200px;
    height: 200px;
    cursor: pointer;
    transition: 0.8s;
    &:hover {
        img {
            z-index: -1;
        }
        background: ${stylingConstants.colours.blue2Percent50};
    }
`;

const FirstNameSpan = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-family: lato-bold;
    color: white;
    font-size: 1.5em;
`;

const Composer = ({ composer }) => {
    const navigate = useNavigate();

    function navigateToComposer() {
        navigate(`/discover-composers/${composer.id}/biography`);
    }

    return (
        <FlexContainer>
            <ImageContainer onClick={navigateToComposer}>
                <FirstNameSpan>
                    {composer.firstName.toUpperCase()}
                </FirstNameSpan>
                <Img src={composer.image} alt="composer picture" />
            </ImageContainer>
            <Span>
                {composer.firstName} {composer.lastName}
            </Span>
        </FlexContainer>
    );
};
export default Composer;
