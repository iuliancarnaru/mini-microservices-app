const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = process.env.PORT || 4005;
const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  await axios.post('http://localhost:4000/events', event).catch((err) => {
    console.log(err.message);
  });

  await axios.post('http://localhost:4001/events', event).catch((err) => {
    console.log(err.message);
  });

  await axios.post('http://localhost:4002/events', event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`EventBus service listening on port: ${PORT}`);
});
