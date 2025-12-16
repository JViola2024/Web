const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const bcrypt = require('bcryptjs');

const eszkozRoutes = require('./routes/eszkozok');
const authRoutes = require('./routes/auth');
const User = require('./models/User');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB csatlakozás
mongoose.connect('mongodb://localhost:27017/it-eszkoz-db')
  .then(async () => {
    console.log('MongoDB csatlakozva');

   //AUTo Admin
    const userszam = await User.countDocuments();
    if (userszam === 0) {
      const hash = await bcrypt.hash('admin123', 10);
      await User.create({
        felhasznalonev: 'admin',
        jelszo: hash
      });
      console.log('Alap admin felhasználó létrehozva');
    }
  })
  .catch(err => console.error(err));

// Route-ok
app.use('/api/eszkozok', eszkozRoutes);
app.use('/api/auth', authRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Szerver fut a ${PORT} porton`);
});
