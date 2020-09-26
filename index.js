const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

const uri = require('./app/config/db.config.js');

const app = express();
require('./app/routes/spotifai.router.js')(app);

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

mongoose.connect(uri, (err, res) => {
  if (err) throw err;
  console.log("Base de datos online")
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
 });

app.get('/', async function (req, res) {
  res.send('Espoti fai')
});