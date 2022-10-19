export async function getCompositions() {
    const response = await fetch("http://localhost:8000/api/compositions");
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

export async function getCompositionsByComposerId(id) {
    const response = await fetch(
        `http://localhost:8000/api/composers/${id}/compositions`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getCompositionsCount() {
    const response = await fetch(
        "http://localhost:8000/api/compositions?limit=1"
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

export async function addComposition(composition) {
    const response = await fetch(
        "http://localhost:8000/api/dash/database/add/composition",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
            body: JSON.stringify(composition),
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
}
