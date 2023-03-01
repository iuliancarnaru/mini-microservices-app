const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = process.env.PORT || 4005;
const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', async (req, res) => {
  const event = req.body;

  events.push(event);

  await axios
    .post('http://posts-clusterip-service:4000/events', event)
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .post('http://comments-clusterip-service:4001/events', event)
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .post('http://query-clusterip-service:4002/events', event)
    .catch((err) => {
      console.log(err.message);
    });

  await axios
    .post('http://moderation-clusterip-service:4003/events', event)
    .catch((err) => {
      console.log(err.message);
    });

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(PORT, () => {
  console.log(`EventBus service listening on port: ${PORT}`);
});
