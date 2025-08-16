

// 🔧 Replace with your actual config from Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAgW7_TH0Brx_vEYNouBwlcXBmPVG2hbi8",
  authDomain: "apnaghar-27d34.firebaseapp.com",
  projectId: "apnaghar-27d34",
  storageBucket: "apnaghar-27d34.firebasestorage.app",
  messagingSenderId: "166414131589",
  appId: "1:166414131589:web:e821e5c79e7110d6caa4ec",
  measurementId: "G-5KD73MFLBC"
  };

// Initialize Firebase (compat)
firebase.initializeApp(firebaseConfig);

// Make auth available globally
window.auth = firebase.auth();

