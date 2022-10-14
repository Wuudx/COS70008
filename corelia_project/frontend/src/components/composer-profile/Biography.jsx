import React from "react";
import styled from "styled-components";

const P = styled.p`
    margin: 0px;
`;

const Biography = ({ biography }) => {
    let content;
    if (!biography) {
        content = "Information not available";
    } else {
        content = biography;
    }
    return <P>{content}</P>;
};

export default Biography;
