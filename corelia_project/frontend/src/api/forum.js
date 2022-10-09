export async function getAllForumPosts() {
    const response = await fetch("http://localhost:8000/api/forums");
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
