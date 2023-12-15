const express = require('express');
const app = express();
const phonesData = require('./data/phones.json');

// Ruta para mostrar todos los teléfonos
app.get('/phones', (req, res) => {
  res.json(phonesData);
});

// Ruta para mostrar detalles de un teléfono por su ID
app.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
  const phoneDetails = phonesData.find(phone => phone.id == phoneId);
  if (phoneDetails) {
    res.json(phoneDetails);
  } else {
    res.status(404).json({ message: 'Phone not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
