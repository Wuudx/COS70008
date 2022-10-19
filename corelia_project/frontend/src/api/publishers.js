export async function addPublisher(publisher) {
    const response = await fetch(
        "http://localhost:8000/api/dash/database/add/publisher",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${localStorage.getItem("auth_token")}`,
            },
            body: JSON.stringify(publisher),
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
}
