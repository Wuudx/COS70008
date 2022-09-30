async function getFeaturedComposers() {
    const response = await fetch("http://localhost:8000/api/featured/");
    if (!response.ok) {
        throw new Error(response.status);
    }
    return response.json();
}

export default getFeaturedComposers;
