const superagent = require('superagent');
const Character = require('../models/data.model');
async function getSuperAgent(req, res) {
  let finalData = [];
  const superagentURL = `https://psychonauts-api.herokuapp.com/api/characters`;
  superagent.get(superagentURL).then(data => {
    finalData = data.body.map(mapingData => {
      return new Character(mapingData);
    })
    res.send(finalData);
  }).catch((error) => {
    console.log('======================');
    console.log('error from getData.Controller', error);
    console.log('======================');
    res.send(error);
  })
}
module.exports = getSuperAgent;