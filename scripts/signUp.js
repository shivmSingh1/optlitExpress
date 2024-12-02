const signInBtn = document.querySelector(".sign-in-btn");

signInBtn.addEventListener("click", () => {
    window.location.href = "../pages/login.html"
})

// ------------------------------------------------
import { danger, shToast, success } from "../modules/toast";
const form = document.getElementById('signupForm');


form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Client-side validation
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username.length < 6) {
        shToast('Username must be at least 3 characters long.', danger, "black");
        return;
    }
    if (!email.match(/^\S+@\S+\.\S+$/)) {
        alert('Please enter a valid email.');
        return;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    try {
        // Send data to the server
        const response = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const result = await response.text();

        if (response.ok) {
            shToast('Signup successful! You can now login.', success, "black");
            form.reset(); // Clear form fields
        } else {
            alert(result); // Display server error
        }
    } catch (error) {
        alert('An error occurred. Please try again later.');
        console.error(error);
    }
});