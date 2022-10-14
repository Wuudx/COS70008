export async function getPopularBlogPosts() {
    const response = await fetch('http://localhost:8000/api/blogs/popular');
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}