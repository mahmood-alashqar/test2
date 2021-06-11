class Character {
  constructor(data) {
    this.name = data.name;
    this.img = data.img;
    // data.psiPowers.map(data => {
    //   this.psiPowersImage = data.img;
    //   this.psiPowersName = data.name;
    // });
    this.psiPowers = data.psiPowers;


  }
}
module.exports = Character;
