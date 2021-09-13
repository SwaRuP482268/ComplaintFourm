import firebase from 'firebase';
require('@firebase/firestore');
import 'firebase/auth';

var firebaseConfig = {
  apiKey: "AIzaSyC0JxlL4poDczoL4-D52uDS6L42kFW6z2g",
  authDomain: "complaint-forum-c13a5.firebaseapp.com",
  projectId: "complaint-forum-c13a5",
  storageBucket: "complaint-forum-c13a5.appspot.com",
  messagingSenderId: "215296640127",
  appId: "1:215296640127:web:6b34aa58280740ec10ab4a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.firestore();
