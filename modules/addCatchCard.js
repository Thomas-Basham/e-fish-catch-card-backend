const firebase = require("../db");
const fireStore = firebase.firestore();

const dbCollection = fireStore.collection("catch-cards").doc(Date.now().toString());


const addCatchCard = async (req, res, next) => {
  try {
    console.log("Adding new Catch Card");
    const data = req.body;
    console.log(data)
    await dbCollection.set(data);
    res.status(200).json({ message: "Record saved successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = addCatchCard;
