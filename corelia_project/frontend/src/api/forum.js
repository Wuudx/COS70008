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
