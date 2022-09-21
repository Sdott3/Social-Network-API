// Require express and mongoose
const express = require('express');
const mongoose = require('mongoose');


// App start up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes')); 

// Connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Social-Network-API', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongoose queries
mongoose.set('debug', true);

app.listen(PORT, () => console.log(` Connected on localhost:${PORT} `));