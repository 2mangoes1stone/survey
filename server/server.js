const express = require('express');
const bodyParser = require('body-parser');


// kick off express server
const server = express();
server.use(bodyParser.json());

server.use('/test', (req, res) => {
  res.json({ "success": true })
});

// Start local server
server.listen(4000, () => {
  console.log(`Server listening on port: 4000`);
});