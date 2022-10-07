export async function getComposers() {
    const response = await fetch("http://localhost:8000/api/composers");
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export async function filterComposersByLetter(letter) {
    const response = await fetch(
        `http://localhost:8000/api/discover_composers/${letter}`
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
