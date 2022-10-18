import constants from "../utils/constants";

function convertMonthToNumber(month) {
    switch (month) {
        case "January":
            return "01";
        case "February":
            return "02";
        case "March":
            return "03";
        case "April":
            return "04";
        case "May":
            return "05";
        case "June":
            return "06";
        case "July":
            return "07";
        case "August":
            return "08";
        case "September":
            return "09";
        case "October":
            return "10";
        case "November":
            return "11";
        case "October":
            return "12";
    }
}

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

export async function getForumPostsByMonthAndYear(monthFilter, yearFilter) {
    let url;
    // Note we have to check string equality here because if there is no month or year filter, the value is literally
    // null due to the fact that it is passed from url.
    if (monthFilter !== "null" && yearFilter !== "null") {
        const monthNumber = convertMonthToNumber(monthFilter);
        url = `http://localhost:8000/api/forums/${yearFilter}/${monthNumber}/posts?limit=${constants.POSTS_LIMIT}`;
    } else if (monthFilter !== "null") {
        const monthNumber = convertMonthToNumber(monthFilter);
        url = `http://localhost:8000/api/forums/month/${monthNumber}/posts?limit=${constants.POSTS_LIMIT}`;
    } else if (yearFilter !== "null") {
        url = `http://localhost:8000/api/forums/year/${yearFilter}/posts?limit=${constants.POSTS_LIMIT}`;
    } else if (monthFilter === "null" && yearFilter === "null") {
        url = `http://localhost:8000/api/forums?limit=${constants.POSTS_LIMIT}`;
    }
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

export async function editPost(postId, newContent) {
    const response = await fetch(
        `http://localhost:8000/api/forums/${postId}/modify`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
            body: JSON.stringify({ content: newContent }),
        }
    );
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

export async function deletePost(postId) {
    const response = await fetch(
        `http://localhost:8000/api/forums/${postId}/modify`,
        {
            method: "DELETE",
            headers: {
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
}

export async function deleteComment(commentId) {
    const response = await fetch(
        `http://localhost:8000/api/forums/comments/${commentId}/modify`,
        {
            method: "DELETE",
            headers: {
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
}
