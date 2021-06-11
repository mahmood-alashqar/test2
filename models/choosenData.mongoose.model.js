const mongoose = require('mongoose');
const characterSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  img: String,
  psiPowers: Array

});
const characterModel = new mongoose.model('PsiPowers', characterSchema);
module.exports = characterModel;