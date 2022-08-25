var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://e-fish-catch-card-default-rtdb.firebaseio.com",
});

// const db = admin.firestore();

// module.exports = db;
