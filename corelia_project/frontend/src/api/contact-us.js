export async function contactUs(information) {
    const response = await fetch(
        "http://localhost:8000/api/contact/form/submission",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(information),
        }
    );
    if (!response.ok) {
        throw new Error(response.status);
    }
    const json = await response.json();
    return json;
}
