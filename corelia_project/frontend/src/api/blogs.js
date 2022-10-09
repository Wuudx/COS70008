export async function getBlogPosts() {
    console.log('here');
    const response = await fetch('http://localhost:8000/api/blogs');
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}
