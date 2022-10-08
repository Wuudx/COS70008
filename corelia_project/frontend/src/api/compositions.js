export async function getCompositions() {
    const response = await fetch('http://localhost:8000/api/compositions');
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getCompositionById(id) {
    const response = await fetch(
        `http://localhost:8000/api/compositions/${id}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getCompositionsCount() {
    const response = await fetch(
        'http://localhost:8000/api/compositions?limit=1'
    );
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
