const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');

// get all members as json
router.get('/', (req, res) => {
  res.json(members)
});

// get single member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
});

// create member
router.post('/', (req, res) => {
  res.send(req.body); //  this will show in postman post request
});

module.exports = router;