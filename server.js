const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Sinokuhle Liskhanya Spelman',
    title: 'Software Developer',
    location: 'South Africa',
    email: 'sinokuhle13@gmail.com',
    phone: '+27 82 000 0000'
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  console.log('New contact form submission:', { name, email, subject, message });
  return res.json({ status: 'Message received. I will respond soon.' });
});

const staticPath = path.join(__dirname, 'client', 'dist');
app.use(express.static(staticPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
