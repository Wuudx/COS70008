import React from "react";
import styled from "styled-components";
import { useAuthState } from "../../context";
import stylingConstants from "../../utils/styling";
import WeeklyData from "./WeeklyData";

const Container = styled.div`
    margin: 0px ${stylingConstants.sizes.leftRightMargin};
    h1 {
        margin: 0px;
    }
`;

const WeeklyDataHeader = styled.div`
    background-color: ${stylingConstants.colours.blue1};
    width: 100%;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    height: 4em;
    padding: 1.5em;
    font-family: lato-bold;
    display: flex;
    align-items: center;
`;

const AdminDash = () => {
    const user = useAuthState();

    return (
        <Container>
            <h1>Welcome Back {user.user.username}</h1>
            <WeeklyDataHeader>Weekly Data</WeeklyDataHeader>
            <WeeklyData />
        </Container>
    );
};

export default AdminDash;
