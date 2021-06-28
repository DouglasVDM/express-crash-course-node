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
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if (!newMember.name || !newMember.email) {
    res.status(400).json({ msg: 'Please include a name and email' });
  } //  check if name and email is included
  members.push(newMember);  //  add newMember to members
  res.json(members);  //  return all members
});

// update a member
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));

  if (found) {
    const updateMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updateMember.name ? updateMember.name : member.name;
        member.email = updateMember.email ? updateMember.email : member.email;

        res.json({ msg: 'Meber updated', member });
      }
    })
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
  }
});

module.exports = router;