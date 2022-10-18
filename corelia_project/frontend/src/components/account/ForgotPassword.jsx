import styled from 'styled-components';
import React from 'react';
import ForgotPasswordForm from './ForgotPasswordForm';

const ForgotPasswordDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const ForgotPasswordBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 2rem;
    min-height: 350px;
    // max-height: 350px;
    margin: 2rem;
    min-width: 300px;
    max-width: 300px;
    border-radius: 20px;
    box-shadow: 35px 35px 70px #ababab, -35px -35px 70px #ffffff;
`;

const ForgotPassword = () => {
    return (
        <ForgotPasswordDiv>
            <ForgotPasswordBox>
                <ForgotPasswordForm />
            </ForgotPasswordBox>
        </ForgotPasswordDiv>
    );
};
export default ForgotPassword;
