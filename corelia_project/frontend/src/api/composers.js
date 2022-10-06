async function getComposers() {
    const response = await fetch('http://localhost:8000/api/composers');
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

async function getComposersCompositionCount() {
    const response = await fetch(
        'http://localhost:8000/api/composers/composition-count'
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export { getComposers, getComposersCompositionCount };
