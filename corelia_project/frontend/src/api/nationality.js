async function getNationalities() {
    const response = await fetch("http://localhost:8000/api/nationality/");
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export default getNationalities;