"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// adder:
const addForm = document.querySelector("#add-form");
addForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault(); // prevent side reload when submitting the form
    // select values
    const a = Number(document.querySelector("#a").value);
    const b = Number(document.querySelector("#b").value);
    const c = Number(document.querySelector("#c").value);
    const res = yield fetch("http://localhost:3000/add", {
        method: "POST",
        mode: "cors", // This set CORS mode, not required here but recommended
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ a, b, c }), // übertrage a, b, und c als json zum Server
    });
    const data = yield res.json(); // parse das zurückgegeben JSON
    console.log(res.status + " " + res.statusText); // Gebe den http statuscode in der Konsole aus
    if (res.ok) {
        const result = document.querySelector("#result");
        if (result) {
            result.textContent = data.sum;
        }
    }
}));
// Aufgabe 1:
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("http://localhost:3000/cookies", {
        method: "GET", // GET request
        mode: "cors", // aktiviere CORS; nicht unbedingt notwendig hier, aber empfehlenswert
        credentials: "include" // setze credential auf include, um cookies zu setzen
    });
    console.log(res.status + " " + res.statusText); // Gebe den HTTP status code und den status text des fetch()-Aufrufs in der Konsole aus
}));
const getCookiesBtn = document.querySelector("#displayCookiesBtn");
const displayCookies = document.querySelector("#displayCookies ");
getCookiesBtn.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    displayCookies.textContent = document.cookie; // schreibe cookies in das feld
}));
const hideCookiesBtn = document.querySelector("#hideCookiesBtn");
hideCookiesBtn.addEventListener("click", () => {
    displayCookies.textContent = ""; // setze das Feld zurück
});
// Aufgabe 2:
// Selektiere login und logout btn
const loginBtn = document.querySelector("#login");
const logoutBtn = document.querySelector("#logout");
loginBtn.addEventListener("click", (evt) => __awaiter(void 0, void 0, void 0, function* () {
    evt.preventDefault(); // prevents side reloading
    const username = document.querySelector("#userName").value; // lese wert des Inputs Username
    // console.log(username);
    if (username != null) { // rufe die Fnktn. nur auf, wenn ein Wert in username steht
        const res = yield fetch("http://localhost:3000/login", {
            method: "POST",
            mode: "cors", // This set CORS mode, not required here but recommended
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username }), // übertrage a, b, und c als json zum Server
        });
        console.log(res.status + " " + res.statusText);
    }
}));
