import { FaRegCopyright } from 'react-icons/fa';
import styled from 'styled-components';
import React from 'react';

const Span = styled.span`
    font-family: lato-regular;
    color: white;
`;

const CopyrightMessage = () => {
    return (
        <Span>
            {/* Vertical align needed to align copyright symbol with text. */}
            <FaRegCopyright style={{ verticalAlign: 'bottom' }} /> 2022 Corelia
            Project. All Rights Reserved.
        </Span>
    );
};

export default CopyrightMessage;
