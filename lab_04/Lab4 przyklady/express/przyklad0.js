const express = require('express');
const app = express();

/*
  A co do ten status 200?
  Proszę sobie doczytać o HTTP status codes:
  https://www.w3schools.com/tags/ref_httpmessages.asp
*/

app.get('/test', (req, res) => {
  res.status(200).json({
    message: "test"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});