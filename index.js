const express = require('express');
const cors = require('cors');

const PORT = 4002;

let app = express();
app.use(cors());
app.use(express.json());

let entrys = [];

app.post('/entrys', async (req, resp) => {
  entrys.push(req.body);
  resp.send(entrys[entrys.length-1]).status(201);
});

app.get('/entrys', async (req, resp) => {
  resp.send(entrys).status(200);
});

app.get('/entrys/:entryId', async (req, resp) => {
  let entry = entrys[req.params.entryId-1];
  resp.send(entry).status(200);
});

app.listen(PORT, () => {
  console.log('Server started on port ' + PORT);
});
