import React from "react";
import styled from "styled-components";

const P = styled.p`
    margin: 0px;
`;

const Biography = ({ biography }) => {
    function createMarkup() {
        return { __html: biography };
    }

    let content;
    if (!biography) {
        content = <P>Information not available</P>;
    } else {
        content = <P dangerouslySetInnerHTML={createMarkup()}></P>;
    }
    return <P>{content}</P>;
};

export default Biography;
