import styled from "styled-components";
import RoundedImage from "../../../shared-styled-components/RoundedImage";
import React from "react";

const FlexContainer = styled.div`
    display: flex;
    gap: 0.5em;
`;

const UsernameAndTimeFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const PostUserAndTime = ({ profilePicture, username, timeFromPost }) => {
    return (
        <FlexContainer>
            <RoundedImage src={profilePicture} width="30px" height="30px" />
            <UsernameAndTimeFlexContainer>
                <span>{username}</span>
                <span>{timeFromPost}</span>
            </UsernameAndTimeFlexContainer>
        </FlexContainer>
    );
};
export default PostUserAndTime;
