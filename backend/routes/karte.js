import express from "express"
import { query } from "../db.js"

const router = express.Router()

// Alle Pizzen Abrufen
router.get("/", async (req, res) => {
    try {
        const result = await query("SELECT * FROM karte");
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
})

export default router