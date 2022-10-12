import constants from "../utils/constants";

export async function getForumPosts(optionalUrl) {
    const url =
        optionalUrl ||
        `http://localhost:8000/api/forums?limit=${constants.POSTS_LIMIT}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    const json = await response.json();
    return json;
}

export async function getForumPostById(id) {
    const response = await fetch(`http://localhost:8000/api/forums/${id}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    const json = await response.json();
    return json;
}

export async function getCommentsOnPost(postId) {
    const response = await fetch(
        `http://localhost:8000/api/forums/comments/${postId}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    const json = await response.json();
    return json;
}

export async function createPost(newPost) {
    const response = await fetch(`http://localhost:8000/api/forums`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("auth_token")}`,
        },
        body: JSON.stringify(newPost),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
}

export async function createComment(newComment) {
    const response = await fetch(
        `http://localhost:8000/api/forums/comments/all`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
            body: JSON.stringify(newComment),
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
}
