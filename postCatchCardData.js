const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore();

const docRef = db.collection("catch-cards").doc("card");

async function postCatchCardData() {
  await docRef.set({
    date_caught: "2022-8-25",
    body_of_water: "Lake Washington",
    fish_length: 5,
    species: "trout",
    weight: 3,
  });
}

postCatchCardData();

module.exports = postCatchCardData;
