import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Starting graphql');
});

app.listen(8000, () => console.log("Running at 8000..."));
