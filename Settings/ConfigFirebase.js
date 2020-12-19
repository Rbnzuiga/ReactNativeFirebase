import firebase from 'firebase/app';
import 'firebase/database';


const config={
    apiKey: "AIzaSyDkXbDuIlXX90s99ZuoTmXHhK7gG6tMl2I",
    authDomain: "bdp1-am.firebaseapp.com",
    databaseURL: "https://bdp1-am.firebaseio.com",
    projectId: "bdp1-am",
    storageBucket: "bdp1-am.appspot.com",
    messagingSenderId: "530601959182",
    appId: "1:530601959182:web:86bb8a315c457dbfe4815f",
    measurementId: "G-FVL1SXL19C"



}
const fb = !firebase.apps.length ? firebase.initializeApp(config):firebase.app()
export default fb;