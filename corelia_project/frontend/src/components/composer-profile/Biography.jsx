import React from "react";
import styled from "styled-components";

const P = styled.p`
    margin: 0px;
`;

const Biography = ({ biography }) => {
    return <P>{biography}</P>;
};

export default Biography;
