const express = require('express')
const app = express()
const port = 3000

const responseString = `<h2 style="text-align:center">Hello World!</h2>
  <h4 style="text-align:center">Message received: "${process.env.PODINFO_UI_MESSAGE}"</h4>`;

app.get('/healthz', (req, res) => {
  res.json({ status: 'OK!' });
});

app.get('/readyz', (req, res) => {
  res.json({ status: 'OK!' });
});

app.get('/*', (req, res) => {
  res.send(responseString);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
