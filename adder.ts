import express, {NextFunction} from "express"; // importiere das Hauptmodul (default import)
import {Express, Request, Response} from "express"; // importiere zusätzliche spezifische Typen (named imports)

const app : Express = express(); // erstelle eine express Anwendung
const port : number = 3000; // weise einen Port zu

app.use(express.json()); // Middleware zum parsen von JSON-Daten im Request Body
app.use("/", express.static(__dirname+'/public'));

// allow CORS-Richtlinien-MIDDLEWARE
app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:63343");
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next(); // Diese Middleware sendet nicht die Antwort und die Anfrage soll weiter durch den Middleware-Stack gehen, ansonsten würde keine Antwort zurückkommen.
})

app.listen(port, () => {
    console.log("Server is running on port: " + port);
})

app.post("/add", (req : Request, res : Response) => {
    let reply : number = req.body.a + req.body.b + req.body.c;
    console.log("Ergebnis: " + reply);
    res.setHeader("Content-Type", "application/json");
    res.status(200).end(JSON.stringify({sum:reply}));
});