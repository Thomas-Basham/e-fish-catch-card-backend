require("dotenv").config();
var admin = require("firebase-admin");

// var serviceAccount = require("./serviceAccountKey.json");


const {
  PROJECT_ID,
  PRIVATE_KEY_ID,
  PRIVATE_KEY,
  CLIENT_EMAIL,
  CLIENT_ID,
  AUTH_URI,
  TOKEN_URI,
  AUTH_PROVIDER_X509_CERT_URL,
  CLIENT_X509_CERT_URL

} = process.env;

var serviceAccount = 
{
  "type": "service_account",
  "project_id": PROJECT_ID,
  "private_key_id": PRIVATE_KEY_ID,
  "private_key": PRIVATE_KEY,
  "client_email": CLIENT_EMAIL,
  "client_id": CLIENT_ID,
  "auth_uri": AUTH_URI,
  "token_uri": TOKEN_URI,
  "auth_provider_x509_cert_url": AUTH_PROVIDER_X509_CERT_URL,
  "client_x509_cert_url": CLIENT_X509_CERT_URL
}

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://e-fish-catch-card-default-rtdb.firebaseio.com",
});

// const db = admin.firestore();

// module.exports = db;
