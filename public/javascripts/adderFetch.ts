// adder:
const addForm : HTMLFormElement = document.querySelector("#add-form") as HTMLFormElement;
addForm.addEventListener("submit", async (event : SubmitEvent) => {
    event.preventDefault(); // prevent side reload when submitting the form
    // select values
    const a : number = Number((document.querySelector("#a") as HTMLInputElement).value);
    const b : number = Number((document.querySelector("#b") as HTMLInputElement).value);
    const c : number = Number((document.querySelector("#c") as HTMLInputElement).value);

    const res : Response = await fetch("http://localhost:3000/add", {
        method: "POST",
        mode: "cors", // This set CORS mode, not required here but recommended
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({a, b, c}), // übertrage a, b, und c als json zum Server
    });

    const data = await res.json(); // parse das zurückgegeben JSON

    console.log(res.status + " " + res.statusText); // Gebe den http statuscode in der Konsole aus
    if (res.ok) {
        const result : HTMLSpanElement = document.querySelector("#result") as HTMLSpanElement;
        if (result) {
            result.textContent = data.sum;
        }
    }
})



// Aufgabe 1:
document.addEventListener("DOMContentLoaded", async () => { // Lade GET Route /cookies , wenn die Seite vollständig geladen wurde
    const res : Response = await fetch("http://localhost:3000/cookies", { // Rufe Route /cookies auf dem lokalen Server auf Port 3000 auf
        method: "GET", // GET request
        mode: "cors", // aktiviere CORS; nicht unbedingt notwendig hier, aber empfehlenswert
        credentials : "include" // setze credential auf include, um cookies zu setzen
    });
    console.log(res.status + " " + res.statusText); // Gebe den HTTP status code und den status text des fetch()-Aufrufs in der Konsole aus
});

const getCookiesBtn : HTMLButtonElement = document.querySelector("#displayCookiesBtn") as HTMLButtonElement;
const displayCookies : HTMLElement = document.querySelector("#displayCookies ") as HTMLInputElement;
getCookiesBtn.addEventListener("click", async () => {
    displayCookies.textContent = document.cookie; // schreibe cookies in das feld
});

const hideCookiesBtn : HTMLButtonElement = document.querySelector("#hideCookiesBtn") as HTMLButtonElement;
hideCookiesBtn.addEventListener("click",  () => {
    displayCookies.textContent = ""; // setze das Feld zurück
})



// Aufgabe 2:
// Selektiere login und logout btn
const loginBtn : HTMLButtonElement = document.querySelector("#login") as HTMLButtonElement;
const logoutBtn : HTMLButtonElement = document.querySelector("#logout") as HTMLButtonElement;
loginBtn.addEventListener("click",  async (evt: MouseEvent) => { // wenn der login btn geklickt wird
    evt.preventDefault(); // prevents side reloading
    const username : string = (document.querySelector("#userName") as HTMLInputElement).value; // lese wert des Inputs Username
    // console.log(username);
    if (username != null) { // rufe die Fnktn. nur auf, wenn ein Wert in username steht
        const res : Response = await fetch("http://localhost:3000/login", {
            method: "POST",
            mode: "cors", // This set CORS mode, not required here but recommended
            credentials : "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username}), // übertrage a, b, und c als json zum Server
        });
        console.log(res.status + " " + res.statusText);
    }
})

