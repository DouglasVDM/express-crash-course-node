const { log } = require('console');
const express = require('express');
const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 5000;


// initialise middleware
// app.use(logger);


// get all members as json
app.get('/api/members', (req, res) => {
  res.json(members)
});

// get single member
app.get('/api/members/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({msg: `No member with the id of ${req.params.id}`})
  }
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));