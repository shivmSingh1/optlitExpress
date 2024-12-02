import "bootstrap/dist/css/bootstrap.min.css"
import { shToast, success } from "./modules/toast"
const navLinks = document.querySelectorAll(".nav-links")

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove("active")
        navLink.classList.add("active")
    })
})

// ------------------------------------------------------------------------

// Function to get query parameter value
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// On page load, check for the toast query parameter
window.addEventListener("DOMContentLoaded", () => {
    // Get the value of 'toast' query parameter
    const toastMessage = getQueryParam("toast");

    if (toastMessage === "login-success") {
        // Show success toast
        shToast("login successfull", success)
        // Remove the query parameter from the URL without reloading the page
        const url = new URL(window.location);
        url.searchParams.delete("toast");
        window.history.replaceState({}, "", url);
    }
});