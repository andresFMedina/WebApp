import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyCii5wrpek63cZ2MJhNrTobiiYWsWFTETA",
    authDomain: "trabajo-de-grado-f9cb8.firebaseapp.com",
    databaseURL: "https://trabajo-de-grado-f9cb8.firebaseio.com",
    projectId: "trabajo-de-grado-f9cb8",
    storageBucket: "trabajo-de-grado-f9cb8.appspot.com",
    messagingSenderId: "393860046374"
};

const firebaseConfig = firebase.initializeApp(config);

export default firebaseConfig;
