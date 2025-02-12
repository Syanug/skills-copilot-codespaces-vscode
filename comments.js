// Create web server
// Create a web server that listens on port 3000. The server should respond to requests to URLs /comments and return a list of comments in JSON format.
const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
  res.json([
    { id: 1, author: 'John', text: 'Hello!' },
    { id: 2, author: 'Jane', text: 'How are you?' },
    { id: 3, author: 'John', text: 'I am good, thank you!' },
  ]);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
