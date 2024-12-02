// import { shToast, danger } from "../modules/toast"

import { danger, shToast, success } from "../modules/toast";


const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {

	e.preventDefault();

	const email = document.querySelector("#email").value.trim();
	const password = document.querySelector("#password").value.trim();

	if (!email || !password) {
		console.log("Email and password are required.");
		return;
	}

	try {

		const response = await fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password })
		})

		if (response.ok) {
			const result = await response.json(); // Parse JSON response
			// Store user's name in localStorage
			localStorage.setItem("userName", result.name);

			loginForm.reset(); // Clear form fields
			window.location.href = "http://localhost:5173/index.html?toast=login-success";
		} else {
			const errorText = await response.text();
			shToast(errorText, danger)
		}

	} catch (error) {
		console.log(error)
	}

})

