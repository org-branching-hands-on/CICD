const express = require('express');
const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'senha') {
    return res.json({ token: 'fake-jwt-token' });
  }
  return res.status(401).json({ error: 'Credenciais inválidas' });
});

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
}

module.exports = app;
