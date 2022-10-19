import React from "react";
import { ScaleLoader } from "react-spinners";
import styled from "styled-components";
import {
    getContactMessages,
    getWeeklyBlogPosts,
    getWeeklyForumPosts,
    getWeeklyNewUsers,
} from "../../api/admin-dash";
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import stylingConstants from "../../utils/styling";

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 2em;
`;

const WeeklyDataContainer = styled.div`
    background: white;
    border-radius: ${stylingConstants.sizes.containerBorderRadius};
    padding: 2em;
    h3 {
        margin: 0px;
    }
    margin-top: 1.2em;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function createWeeklyDataElement(data, isLoading, error, header) {
    if (isLoading) {
        return (
            <WeeklyDataContainer>
                <ScaleLoader color={stylingConstants.colours.blue1} />
            </WeeklyDataContainer>
        );
    } else if (error) {
        return <WeeklyDataContainer>{error.message}</WeeklyDataContainer>;
    } else {
        return (
            <WeeklyDataContainer>
                <h3>{header}</h3>
                <span>{data}</span>
            </WeeklyDataContainer>
        );
    }
}

const WeeklyData = () => {
    const [weeklyUserData, isLoadingUser, errorUser] =
        useFetchOnPageLoad(getWeeklyNewUsers);
    const [weeklyBlogData, isLoadingBlog, errorBlog] =
        useFetchOnPageLoad(getWeeklyBlogPosts);
    const [weeklyForumData, isLoadingForum, errorForum] =
        useFetchOnPageLoad(getWeeklyForumPosts);
    const [contactMessageData, isLoadingContact, errorContact] =
        useFetchOnPageLoad(getContactMessages);

    const weeklyUserDataElement = createWeeklyDataElement(
        weeklyUserData.count,
        isLoadingUser,
        errorUser,
        "Weekly New Users"
    );
    const weeklyBlogDataElement = createWeeklyDataElement(
        weeklyBlogData.count,
        isLoadingBlog,
        errorBlog,
        "Weekly New Blog Posts"
    );
    const weeklyForumDataElement = createWeeklyDataElement(
        weeklyForumData.count,
        isLoadingForum,
        errorForum,
        "Weekly New Forum Posts"
    );
    const contactMessageDataElement = createWeeklyDataElement(
        contactMessageData.count,
        isLoadingContact,
        errorContact,
        "Contact Messages"
    );

    return (
        <FlexContainer>
            {weeklyUserDataElement}
            {weeklyBlogDataElement}
            {weeklyForumDataElement}
            {contactMessageDataElement}
        </FlexContainer>
    );
};
export default WeeklyData;
