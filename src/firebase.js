import firebase from 'firebase';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCNk8TmmobRIs5ANgmwhY4LXW9mXUhAxs8",
    authDomain: "national-bpa-website.firebaseapp.com",
    databaseURL: "https://national-bpa-website.firebaseio.com",
    projectId: "national-bpa-website",
    storageBucket: "national-bpa-website.appspot.com",
    messagingSenderId: "921302263780"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;
