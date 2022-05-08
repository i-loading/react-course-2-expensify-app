import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MESUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, db as default };

// --- CREATE ---
// db.ref()
//   .set({
//     name: "Ivan Sedyakin",
//     age: 19,
//     stressLevel: 4,
//     job: {
//       title: "Software developer",
//       company: "Apple",
//     },
//     isSingle: true,
//     location: {
//       country: "Ukraine",
//       city: "Kharkiv",
//     },
//   })
//   .then(() => {
//     console.log("Data saved");
//   })
//   .catch((err) => {
//     console.log("Some error occupied", err);
//   });

// --- UPDATE ---
// db.ref().update({ name: "Vanya", age: 20, isSingle: null });

// --- REMOVE ---
// db.ref("isSingle")
//   .remove()
//   .then(() => console.log("removed succesfully"))
//   .catch((e) => console.log("Smth went wrong", e));

// --- READ ---
// const onValueChange = db.ref().on(
//   "value",
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   (e) => {
//     console.log("Error: ", e);
//   }
// );
// setTimeout(() => {
//   db.ref("age").set(20);
// }, 3500);
// setTimeout(() => {
//   db.ref().off("value", onValueChange);
// }, 7000);
// setTimeout(() => {
//   db.ref("age").set(21);
// }, 10500);
// db.ref().on("value", (snapshot) => {
//   const {
//     name,
//     age,
//     job: { title, company },
//   } = snapshot.val();
//   console.log(`${name} is ${age}. Work: ${title}, at ${company}`);
// });

// db.ref("expenses").push({
//   description: "Some text 1",
//   note: "Some note 1",
//   amount: 10000,
//   createdAt: 100000123123,
// });

// db.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     });
//   });
//   console.log(expenses);
// });
