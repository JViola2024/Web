const express = require('express');
const router = express.Router();
const Eszkoz = require('../models/Device');

// LISTÁZÁS
router.get('/', async (req, res) => {
  try {
    const eszkozok = await Eszkoz.find();
    res.json(eszkozok);
  } catch (err) {
    res.status(500).json({ hiba: 'Lekérdezési hiba' });
  }
});

// HOZZÁADÁS
router.post('/', async (req, res) => {
  const { nev, tipus, sorozatszam, beszerzesDatuma } = req.body;

  if (!nev || !tipus || !sorozatszam || !beszerzesDatuma) {
    return res.status(400).json({ hiba: 'Minden mező kitöltése kötelező!' });
  }

  if (typeof sorozatszam !== 'string') {
    return res.status(400).json({ hiba: 'A sorozatszám szöveg kell legyen!' });
  }

  try {
    const ujEszkoz = new Eszkoz(req.body);
    await ujEszkoz.save();
    res.json(ujEszkoz);
  } catch (err) {
    res.status(500).json({ hiba: 'Hiba a mentés során' });
  }
});


// TÖRLÉS
router.delete('/:id', async (req, res) => {
  try {
    await Eszkoz.findByIdAndDelete(req.params.id);
    res.json({ uzenet: 'Eszköz törölve' });
  } catch (err) {
    res.status(400).json({ hiba: 'Törlés sikertelen' });
  }
});


module.exports = router;
