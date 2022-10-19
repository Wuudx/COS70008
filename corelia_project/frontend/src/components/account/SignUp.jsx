import styled from 'styled-components';
import React from 'react';
import SignupForm from './SignupForm';

const SignupDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const SignupBox = styled.div`
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

const Signup = () => {
    return (
        <SignupDiv>
            <SignupBox>
                <SignupForm />
            </SignupBox>
        </SignupDiv>
    );
};
export default Signup;
