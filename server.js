const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const passport = require('passport');
require('dotenv').config();

const users = require('./routes/users');
const logs = require('./routes/logs');

const app = express();

// // Use Middleware to accept data from body
app.use(express.json({ extended: false }));

//DB Config
const db = require('./config/keys').mongoURI;
//Connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected!'))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

//  Routes
app.use('/api/users', users);
app.use('/api/logs', logs);

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server operating on port ${PORT}`));
