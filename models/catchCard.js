class CatchCard {
  constructor(id, fullName, age, contact, department) {
    this.id = id; // represents the id generated by the firestore
    this.date_caught = fullName;
    this.body_of_water = age;
    this.fish_length = contact;
    this.weight = department;
  }
}

module.exports = CatchCard;
