class CatchCard {
  constructor(id, date_caught, species, weight) {
    this.id = id; // represents the id generated by the firestore
    this.date_caught = date_caught;
    this.species = species;
    this.weight = weight;
  }
}

module.exports = CatchCard;
