/**
 * Supreme True Clean Admin Dashboard
 * Live Front-End URL: https://supremetrueclean.github.io/stc-admin/ 
 * Backend API URL: https://script.google.com/macros/s/AKfycbwbsIbTh9xaHf1KJ_olyRBhBsp-h7rE9gfd5GvqSfy29NyyzDNF7iadLtzFmPkRaGWu3A/exec
 */

const API_KEY = "STC123SecureKey"; // API Key for secure communication with the backend
const API_URL = "https://script.google.com/macros/s/AKfycbwbsIbTh9xaHf1KJ_olyRBhBsp-h7rE9gfd5GvqSfy29NyyzDNF7iadLtzFmPkRaGWu3A/exec"; // Google Apps Script Backend API URL

// Helper Function: Toggle Loading Spinner
function toggleLoading(show) {
    document.getElementById("loading").style.display = show ? "block" : "none";
}

// Function: Login
document.getElementById("loginBtn").addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    toggleLoading(true);
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action: "login",
                username,
                password,
                api_key: API_KEY
            }),
        });

        const data = await response.json();
        if (data.status === "success") {
            toggleDashboard(true);
        } else {
            document.getElementById("msg").innerText = data.message || "Login failed";
        }
    } catch (error) {
        console.error("Login Error:", error);
    } finally {
        toggleLoading(false);
    }
});

// Function: Toggle Dashboard Visibility
function toggleDashboard(show) {
    document.getElementById("loginBox").style.display = show ? "none" : "block";
    document.getElementById("dashboard").style.display = show ? "block" : "none";
}

// Logout Button Handler
document.getElementById("logoutBtn").addEventListener("click", () => {
    toggleDashboard(false);
});