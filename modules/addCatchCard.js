const firebase = require("../db");
const fireStore = firebase.firestore();

const addCatchCard = async (req, res, next) => {
  try {
    console.log("Adding new Catch Card");
    const data = req.body;
    await fireStore.collection("catch-cards").doc().set(data);
    res.status(201).json({ message: "Record saved successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = addCatchCard;
