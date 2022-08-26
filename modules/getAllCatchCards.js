const firebase = require("../db");
const CatchCard = require("../models/catchCard");
const fireStore = firebase.firestore();

const getAllCatchCards = async (req, res, next) => {
  try {
    console.log("Getting all catch-cards");
    const CatchCards = await fireStore.collection("catch-cards");
    const data = await CatchCards.get();
    const arr = [];
    if (data.empty) {
      res.status(200).json({ message: "No records found" });
    } else {
      let total = 0;
      data.forEach((item) => {
        const catchCard = new CatchCard(
          item.id,
          item.data().date_caught,
          item.data().species,
          item.data().weight,
        );
        arr.push(catchCard);
        total = total + 1;
      });
      res.status(200).json({
        arr
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = getAllCatchCards;
