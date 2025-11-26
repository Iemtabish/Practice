const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to my practice API!');
});


app.get('/user/:name', (req, res) => {
  res.json({ 
    message: `Hello ${req.params.name}!`,
    timestamp: new Date()
  });
});


app.post('/data', (req, res) => {
  res.json({ 
    received: req.body,
    status: 'success' 
  });
});

app.listen(4000, () => {
  console.log('Express server running on port 4000');
});
