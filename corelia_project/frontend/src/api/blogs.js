export async function getBlogPosts() {
    const response = await fetch('http://localhost:8000/api/blogs');
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getBlogPost(id) {
    const response = await fetch(`http://localhost:8000/api/blogs/${id}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}
