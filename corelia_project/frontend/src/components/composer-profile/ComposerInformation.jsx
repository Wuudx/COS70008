import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Biography from "./Biography";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";

const FlexContainer = styled.div`
    display flex;
    flex-direction: column;
    width: 50%;
`;

const H1 = styled.h1`
    margin: 0px;
`;

const ComposerInformation = ({
    name,
    nationality,
    biography,
    aboutInformation,
}) => {
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
        }
    }, [pathname]);

    return (
        <FlexContainer>
            {" "}
            {/* This will be a flag next to composer name instead of nationality in text */}
            <H1>{`${name} ${nationality}`}</H1>
            <div>Clarinet, Piano</div>
            <Navbar />
            {composerInformationElement}
        </FlexContainer>
    );
};

export default ComposerInformation;
