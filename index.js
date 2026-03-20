const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Probando en Heroku</h1>
    <p> Si.</p>
    <p>Este entorno se usa para validar cambios antes de integrarlos al proyecto principal.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
