// server.js
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const PORT = 5001;

app.use(cors()); // يسمح بالطلبات من المتصفح
app.use(express.json()); // لتحليل JSON

// Endpoint لاستقبال الطلب من React وإرساله إلى Webhook.site
app.post('/send-webhook', async (req, res) => {
  try {
    const webhookUrl = 'https://webhook.site/7c458000-71b1-4989-a5ae-398cfc649745';

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });

    const result = await response.text();
    res.status(200).send(result);
  } catch (error) {
    console.error('Error forwarding to webhook:', error.message);
    res.status(500).send({ error: 'Failed to send to webhook' });
  }
});

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
