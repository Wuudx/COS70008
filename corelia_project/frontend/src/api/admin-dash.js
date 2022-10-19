export async function getWeeklyNewUsers() {
    const response = await fetch(
        "http://localhost:8000/api/dash/users/week/count",
        { headers: { Authorization: `${localStorage.getItem("auth_token")}` } }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getWeeklyBlogPosts() {
    const response = await fetch(
        "http://localhost:8000/api/dash/blogs/week/count",
        { headers: { Authorization: `${localStorage.getItem("auth_token")}` } }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getWeeklyForumPosts() {
    const response = await fetch(
        "http://localhost:8000/api/dash/forums/week/count",
        { headers: { Authorization: `${localStorage.getItem("auth_token")}` } }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getContactMessages() {
    const response = await fetch(
        "http://localhost:8000/api/dash/contact/messages",
        { headers: { Authorization: `${localStorage.getItem("auth_token")}` } }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}
