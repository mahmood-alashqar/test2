const characterModel = require('../models/choosenData.mongoose.model');

async function postCharacter(req, res) {
  const { name, img, psiPowers } = req.body;
  console.log(psiPowers);
  const slug = name.toLowerCase().split(' ').join('-');
  characterModel.find({ slug: slug }, (error, data) => {
    if (data.length > 0) {
      res.send('data already exist');
    }
    else {
      const newCharacter = new characterModel({
        name: name,
        slug: slug,
        img: img,
        psiPowers: psiPowers
      })
      newCharacter.save();
      res.send('Added successfully');
    }
  })
}

async function gethisData(req, res) {
  characterModel.find({}, (error, data) => {
    res.send(data);
  })
}
async function deleteData(req, res) {
  const slug = req.params.slug
  characterModel.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      characterModel.find({}, (error, data) => {
        res.send(data);
      })
    }
  })
}

async function updateData(req, res) {
  let slug = req.params.slug;
  characterModel.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error);
    }
    else {
      data[0].name = req.body.name;
      data[0].save().then(() => characterModel.find({}, (error, data) => {
        res.send(data);
      }))
    }
  })

}


module.exports = {
  postCharacter,
  gethisData,
  deleteData,
  updateData
}