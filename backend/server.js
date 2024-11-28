import express from "express"
import cors from "cors"
import karteRoutes from "./routes/karte.js"
import zutatenRoutes from "./routes/zutaten.js"
import bestellungenRoutes from "./routes/bestellungen.js"

const app = express()
const PORT = 5030;

// Middleware
app.use(cors());
app.use(express.json())


app.use("/api/karte", karteRoutes)
app.use("/api/zutaten", zutatenRoutes)
app.use("/api/bestellungen", bestellungenRoutes)


app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});