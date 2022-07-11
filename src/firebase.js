// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

class Firebase {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebaseConfig = {
  apiKey: "AIzaSyDIp5cE0KLGr8L2WfZR-lLbPeohwGiT1u4",
  authDomain: "task-tracker-723c6.firebaseapp.com",
  projectId: "task-tracker-723c6",
  storageBucket: "task-tracker-723c6.appspot.com",
  messagingSenderId: "854133430768",
  appId: "1:854133430768:web:11a0cac7c6944002b0e535",
  measurementId: "G-Q20L14QML5"
};
  
  // Initialize Firebase
  app = initializeApp(this.firebaseConfig);
  analytics = getAnalytics(this.app);
  db = getFirestore(this.app);

  constructor(){}
  async getTasks() {
    const tasks = collection(this.db , 'todolist');
    const tasksSnapshot = await getDocs(tasks);
    return tasksSnapshot;
  }


}

export default Firebase
