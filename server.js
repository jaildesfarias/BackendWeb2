const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'estiloInfantil.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado em http://localhost:${port}`);
});
