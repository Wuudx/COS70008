import constants from "../utils/constants";

export async function getComposers(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function searchComposers(query) {
    const response = await fetch(
        `http://localhost:8000/api/search-composers/${query}?limit=${constants.DISCOVER_COMPOSERS_LIMIT}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function filterComposersByLetter(letter) {
    const response = await fetch(
        `http://localhost:8000/api/discover-composers/${letter}?limit=${constants.DISCOVER_COMPOSERS_LIMIT}`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getComposersCompositionCount() {
    const response = await fetch(
        "http://localhost:8000/api/composers/composition-count"
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getComposerById(id) {
    const response = await fetch(`http://localhost:8000/api/composers/${id}`);
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function getComposerCompositions(id) {
    const response = await fetch(
        `http://localhost:8000/api/composers/${id}/compositions`
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function addComposer(composer) {
    const response = await fetch(
        `http://localhost:8000/api/dash/database/add/composer`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
            body: JSON.stringify(composer),
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
}
