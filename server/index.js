const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.static(`${process.cwd()}/public`));

app.get('/', function (req, res) {
  res.end('Web Boilerplate');
});

app.listen(port, function (err) {
  if (err) throw err;
  console.log(`Server running at http://127.0.0.1:${port}`);
});
