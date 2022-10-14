import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import stylingConstants from "../../utils/styling";
import About from "./About";
import Biography from "./Biography";
import Compositions from "./Compositions";
import Navbar from "./Navbar";

const FlexContainer = styled.div`
    display flex;
    flex-direction: column;
    width: 50%;
    background: white;
    padding: 1em;
    border-radius: ${stylingConstants.sizes.containerBorderRadius}
`;

const H1 = styled.h1`
    margin: 0px;
`;

const ComposerInformation = ({ composerId, biography, aboutInformation }) => {
    const [composerInformationElement, setComposerInformationElement] =
        useState();
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes("biography")) {
            setComposerInformationElement(<Biography biography={biography} />);
        } else if (pathname.includes("about")) {
            setComposerInformationElement(
                <About aboutInformation={aboutInformation} />
            );
        } else if (pathname.includes("compositions")) {
            setComposerInformationElement(
                <Compositions composerId={composerId} />
            );
        }
    }, [pathname]);

    return (
        <FlexContainer>
            {" "}
            {/* This will be a flag next to composer name instead of nationality in text */}
            <H1>{`${aboutInformation.name} ${aboutInformation.nationality}`}</H1>
            <Navbar />
            {composerInformationElement}
        </FlexContainer>
    );
};

export default ComposerInformation;
