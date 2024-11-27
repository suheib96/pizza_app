import express from "express"
import { query } from "../db.js"

const router = express.Router()

// Alle Bestellungen Abrufen
router.get("/", async (req, res) => {
    try {
        const result = await query("SELECT * FROM bestellungen");
        res.status(200).json(result.rows)
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
})


// Einzelne Bestellung Abrufen
router.get('/:id', async (req, res) => {
    const { id } = req.params; // Die ID aus der URL extrahieren
    try {
        const result = await query('SELECT * FROM bestellungen WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Bestellung nicht gefunden' });
        }
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Database query fehlgeschlagen', details: err.message });
    }
});

router.post('/', async (req, res) => {
    let {kunden_id, lieferadresse, bestellung, gesamtpreis, status} = req.body
    try{
        const result = await query(
            'INSERT INTO bestellungen (kunden_id, lieferadresse, bestellung, gesamtpreis, status) VALUES ($1,$2,$3,$4,$5)',
            [
                kunden_id,
                lieferadresse,
                bestellung,
                gesamtpreis,
                status
            ]
        )
        res.status(200).json("Bestellung wurde erfolgreich aufgegeben")
    }
    catch (err) {
        res.status(500).json({ error: 'Database query fehlgeschlagen', details: err.message });
    }
})

export default router