const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 8082;
const DB = process.env.DATABASE_URL;
const mongoose = require('mongoose');
const getSuperAgent = require('./controllers/getData.controller');
const CRUD = require('./controllers/CRUD.controller');




mongoose.connect(`${DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.get('/', (req, res) => {
  res.send('welcome')
})

app.get('/character', getSuperAgent);
app.post('/character/personalize', CRUD.postCharacter);
app.get('/character/personalize', CRUD.gethisData);
app.put('/character/personalize/:slug', CRUD.updateData);
app.delete('/character/personalize/:slug', CRUD.deleteData);




app.listen(PORT, () => {
  console.log(`the port is : ${PORT}`)
})