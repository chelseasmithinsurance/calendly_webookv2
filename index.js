const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const event = req.body;
  console.log('New Calendly booking received:', event);
  res.status(200).send('Webhook received!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
