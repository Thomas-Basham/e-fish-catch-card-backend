const firebase = require("./db");
const db = firebase.firestore();


const docRef = db.collection("catch-cards").doc("carp-card");

async function postCatchCardData() {
  await docRef.set({
    date_caught: Date.parse('05 Aug 2022 00:00:00 GMT'),
    species: "carp",
    weight: 18,
  });
}

postCatchCardData();

module.exports = postCatchCardData;
