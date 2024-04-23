const addForm : HTMLFormElement = document.querySelector("#add-form") as HTMLFormElement;
addForm.addEventListener("submit", async (event : SubmitEvent) => {
    event.preventDefault(); // prevent side reload when submitting the form
    const a : number = Number((document.querySelector("#a") as HTMLInputElement).value);
    const b : number = Number((document.querySelector("#b") as HTMLInputElement).value);
    const c : number = Number((document.querySelector("#c") as HTMLInputElement).value);

    const res : Response = await fetch("http://localhost:3000/add", {
        method: "POST",
        mode: "cors", // This set CORS mode, not required herea
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({a, b, c}),
    });

    const data = await res.json();

    console.log(res.status + " " + res.statusText);
    if (res.ok) {
        const result : HTMLSpanElement = document.querySelector("#result") as HTMLSpanElement;
        if (result) {
            result.textContent = data.sum;
        }
    }
})

document.addEventListener("DOMContentLoaded", async () => { // Lade GET Route /cookies , wenn die Seite vollständig geladen wurde
    const res : Response = await fetch("http://localhost:3000/cookies", { // Rufe Route /cookies auf dem lokalen Server auf Port 3000 auf
        method: "GET", // GET request
        mode: "cors", // aktiviere CORS; nicht unbedingt notwendig hier, aber empfehlenswert
        credentials : "include" // setze credential auf include, um cookies zu setzen
    });
    console.log(res.status + " " + res.statusText); // Gebe den HTTP status code und den status text des fetch()-Aufrufs in der Konsole aus
});