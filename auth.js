// auth.js
import { auth } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Helpers
function showErrUnder(inputId, msg) {
  const el = document.getElementById(inputId);
  if (!el) return;
  const small = el.nextElementSibling;
  if (small) { small.textContent = msg; small.style.display = 'block'; }
}
function clearErr(formEl) {
  formEl.querySelectorAll('.error-message').forEach(s => s.style.display = 'none');
}

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErr(loginForm);
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErrUnder('loginEmail', 'Invalid email');
    if (password.length < 6) return showErrUnder('loginPassword', 'Min 6 chars');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      document.getElementById('loginMessage').textContent = 'Login success!';
      // redirect if you want: location.href = 'index.html';
    } catch (err) {
      document.getElementById('loginMessage').textContent = err.message;
    }
  });

  const forgot = document.getElementById('forgotPasswordLink');
  forgot.addEventListener('click', async (e) => {
    e.preventDefault();
    const email = prompt("Enter your email for reset link:");
    if (!email) return;
    try {
      await sendPasswordResetEmail(auth, email);
      alert('Password reset email sent.');
    } catch (err) {
      alert(err.message);
    }
  });
}

// Sign Up
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErr(signupForm);
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;

    if (name.length < 3) return showErrUnder('name', 'Min 3 characters');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showErrUnder('email', 'Invalid email');
    if (phone && !/^\d{10}$/.test(phone)) return showErrUnder('phone', '10 digits only');
    if (password.length < 6) return showErrUnder('password', 'Min 6 chars');

    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(cred.user, { displayName: name });
      document.getElementById('formMessage').textContent = 'Signup success!';
      signupForm.reset();
    } catch (err) {
      document.getElementById('formMessage').textContent = err.message;
    }
  });
}
