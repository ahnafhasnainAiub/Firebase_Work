import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBwxM9zkuqc4vKz7qKM-2sLlchh9hDgXlg",
    authDomain: "bookingapp-86752.firebaseapp.com",
    projectId: "bookingapp-86752",
    storageBucket: "bookingapp-86752.appspot.com",
    messagingSenderId: "840872696946",
    appId: "1:840872696946:web:5feac8efcabb3afa75b6eb",
    databaseURL: "https://bookingapp-86752-default-rtdb.firebaseio.com",  
};

  export const app = initializeApp(firebaseConfig);