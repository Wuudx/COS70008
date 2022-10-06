async function getComposers() {
    const response = await fetch("http://localhost:8000/api/composers/");
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export default getFeaturedComposers;
