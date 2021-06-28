const { log } = require('console');
const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 5000;


// initialise middleware
// app.use(logger);

// body parser middleware
app.use(express.json());  //  handle raw json
app.use(express.urlencoded({ extended: false })); //  handle forms submissions

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api routes
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));