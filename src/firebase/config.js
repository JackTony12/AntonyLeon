import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCg9uhVuNmU7IhB1eYNrBA2tMC_zTHp30I",
  authDomain: "antonyleon-emails.firebaseapp.com",
  projectId: "antonyleon-emails",
  storageBucket: "antonyleon-emails.appspot.com",
  messagingSenderId: "357000092350",
  appId: "1:357000092350:web:85e09b2355630f022f1cef"
};
const app = initializeApp(firebaseConfig);
export default app