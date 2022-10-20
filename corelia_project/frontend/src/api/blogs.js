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

export async function getBlogPostsByMonth(month) {
    if (!month) {
        return getBlogPosts();
    }

    const url = `http://localhost:8000/api/blogs/${month}/posts?limit=200`; // limit hack :(

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function addBlog(blog) {
    const response = await fetch('http://localhost:8000/api/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${localStorage.getItem('auth_token')}`,
        },
        body: JSON.stringify(blog),
    });
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}
