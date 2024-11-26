import express from "express"
import { query } from "../db.js"

const router = express.Router()

// Alle Zutaten Abrufen
router.get("/", async (req, res) => {
    try {
        const result = await query("SELECT * FROM zutaten");
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
})


router.get("/:id", async (req, res) => {
    console.log(req.params)
    const id = req.params.id
    console.log(id)
    try {
        const result = await query("SELECT * FROM zutaten WHERE id = $1", [id]);
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
})


export default router