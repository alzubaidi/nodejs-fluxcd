const express = require('express')
const app = express()
const port = 3000


app.get('/healthz', (req, res) => {
  res.json({ status: 'OK!' });
});

app.get('/readyz', (req, res) => {
  res.json({ status: 'OK!' });
});

app.get('/*', (req, res) => {
  res.send(`Hello World! We got ${process.env.PODINFO_UI_MESSAGE}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))