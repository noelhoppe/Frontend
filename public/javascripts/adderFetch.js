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
const addForm = document.querySelector("#add-form");
addForm.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault(); // prevent side reload when submitting the form
    const a = Number(document.querySelector("#a").value);
    const b = Number(document.querySelector("#b").value);
    const c = Number(document.querySelector("#c").value);
    const res = yield fetch("http://localhost:3000/add", {
        method: "POST",
        mode: "cors", // This set CORS mode, not required herea
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ a, b, c }),
    });
    const data = yield res.json();
    console.log(res.status + " " + res.statusText);
    if (res.ok) {
        const result = document.querySelector("#result");
        if (result) {
            result.textContent = data.sum;
        }
    }
}));
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("http://localhost:3000/cookies", {
        method: "GET", // GET request
        mode: "cors", // aktiviere CORS; nicht unbedingt notwendig hier, aber empfehlenswert
        credentials: "include" // setze credential auf include, um cookies zu setzen
    });
    console.log(res.status + " " + res.statusText); // Gebe den HTTP status code und den status text des fetch()-Aufrufs in der Konsole aus
}));
