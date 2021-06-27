const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;



const members = [
  {
    id: 1,
    name: 'Morem Hpsum',
    email: 'moremhpsum2gmail.com',
    status: 'active'
  },
  {
    id: 2,
    name: 'Lorem Ipsum',
    email: 'loremipsum2gmail.com',
    status: 'active'
  },
  {
    id: 3,
    name: 'Borem Jpsum',
    email: 'boremjpsum2gmail.com',
    status: 'active'
  }
];

app.get('/api/members', (req, res) => {
  res.json(members)
});

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));