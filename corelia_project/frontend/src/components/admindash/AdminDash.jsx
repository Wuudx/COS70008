import React from 'react';
import styled from 'styled-components';
import { useAuthState } from '../../context';
import useFetchOnPageLoad from "../../hooks/useFetchOnPageLoad";
import { getWeeklyNewUsers, getWeeklyBlogPosts, getWeeklyForumPosts, getContactMessages } from "../../api/admin-dash";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 1rem 3rem 1rem;
`;

const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 20px;
`;


const AdminDash = () => {
    const user = useAuthState();
    const [weeklyUserData, isLoadingUser, errorUser] = useFetchOnPageLoad(getWeeklyNewUsers);
    const [weeklyBlogData, isLoadingBlog, errorBlog] = useFetchOnPageLoad(getWeeklyBlogPosts);
    const [weeklyForumData, isLoadingForum, errorForum] = useFetchOnPageLoad(getWeeklyForumPosts);
    const [contactMessageData, isLoadingContact, errorContact] = useFetchOnPageLoad(getContactMessages);

    let weeklyNewUsers
    let weeklyNewBlogPosts
    let weeklyNewForumPosts
    let contactMessages

    if (isLoadingUser) {
        weeklyNewUsers = <div>Loading...</div>;
    } else if (errorUser) {
        weeklyNewUsers = <div>{errorUser.message}</div>;
    } else {
        weeklyNewUsers = weeklyUserData.count;
    }

    if (isLoadingBlog) {
        weeklyNewBlogPosts = <div>Loading...</div>;
    } else if (errorBlog) {
        weeklyNewBlogPosts = <div>{errorBlog.message}</div>;
    } else {
        weeklyNewBlogPosts = weeklyBlogData.count;
    }
    
    if (isLoadingForum) {
        weeklyNewForumPosts = <div>Loading...</div>;
    } else if (errorForum) {
        weeklyNewForumPosts = <div>{errorForum.message}</div>;
    } else {
        weeklyNewForumPosts = weeklyForumData.count;
    }

    if (isLoadingContact) {
        contactMessages = <div>Loading...</div>;
    } else if (errorContact) {
        contactMessages = <div>{errorContact.message}</div>;
    } else {
        contactMessages = contactMessageData.count;
    }
    
    return (
        <Container>
            <h1>Welcome Back {`${user.user.username}`}!</h1>
            <InformationContainer>
                <h2>Weekly New Users</h2>
                <h3>{weeklyNewUsers}</h3>
            </InformationContainer>
            <InformationContainer>
                <h2>Weekly New Blog Posts</h2>
                <h3>{weeklyNewBlogPosts}</h3>
            </InformationContainer>
            <InformationContainer>
                <h2>Weekly New Forum Posts</h2>
                <h3>{weeklyNewForumPosts}</h3>
            </InformationContainer>
            <InformationContainer>
                <h2>Contact Messages</h2>
                <h3>{contactMessages}</h3>
            </InformationContainer>

        </Container>
        

    );
};

export default AdminDash;