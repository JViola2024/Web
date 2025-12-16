const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();
const SECRET = 'titkoskulcs'; 


router.post('/register', async (req, res) => {
  const hash = await bcrypt.hash(req.body.jelszo, 10);
  const user = new User({
    felhasznalonev: req.body.felhasznalonev,
    jelszo: hash
  });
  await user.save();
  res.json({ uzenet: 'Felhasználó létrehozva' });
});

// LOGIN
router.post('/login', async (req, res) => {
  const user = await User.findOne({ felhasznalonev: req.body.felhasznalonev });
  if (!user) return res.status(401).json({ hiba: 'Hibás adatok' });

  const ok = await bcrypt.compare(req.body.jelszo, user.jelszo);
  if (!ok) return res.status(401).json({ hiba: 'Hibás adatok' });

  const token = jwt.sign({ id: user._id }, SECRET);
  res.json({ token });
});

module.exports = router;
