const config = {
  apiKey: "AIzaSyAsdOe8IXzZ3Xm8MApQ3pV9FcA0RWBMgzM",
  authDomain: "get-fit-4cf60.firebaseapp.com",
  databaseURL: "https://get-fit-4cf60.firebaseio.com",
  projectId: "get-fit-4cf60",
  storageBucket: "get-fit-4cf60.appspot.com",
  messagingSenderId: "981830839534",
  appId: "1:981830839534:web:5539b5283d6a3055"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
