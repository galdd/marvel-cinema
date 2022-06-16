import * as firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAT3mY3ejglW0KzTcp1diVt6N89ewr1ZFM',
  authDomain: 'netflix-151df.firebaseapp.com',
  projectId: 'netflix-151df',
  storageBucket: 'netflix-151df.appspot.com',
  messagingSenderId: '316700975498',
  appId: '1:316700975498:web:15063159b205c1a349a873',
  measurementId: 'G-2ZGE63ES9F',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default storage;
