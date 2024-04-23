"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // importiere das Hauptmodul (default import)
const app = (0, express_1.default)(); // erstelle eine express Anwendung
const port = 3000; // weise einen Port zu
app.use(express_1.default.json()); // Middleware zum parsen von JSON-Daten im Request Body
app.use("/", express_1.default.static(__dirname + '/public'));
// allow CORS-Richtlinien-MIDDLEWARE
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:63343");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); // Diese Middleware sendet nicht die Antwort und die Anfrage soll weiter durch den Middleware-Stack gehen, ansonsten würde keine Antwort zurückkommen.
});
app.listen(port, () => {
    console.log("Server is running on port: " + port);
});
app.post("/add", (req, res) => {
    let reply = req.body.a + req.body.b + req.body.c;
    console.log("Ergebnis: " + reply);
    res.setHeader("Content-Type", "application/json");
    res.status(200).end(JSON.stringify({ sum: reply }));
});
