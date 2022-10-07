export async function getComposers() {
    const response = await fetch('http://localhost:8000/api/compositions');
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getCompositionsWithUrl(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}
