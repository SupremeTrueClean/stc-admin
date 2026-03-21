const API = "https://your-secure-backend-or-script-url";

// ======= SHOW/HIDE LOADING =======
function showLoading(show) {
    document.getElementById("loading").style.display = show ? "block" : "none";
}

// ======= LOGIN FUNCTION =======
async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    showLoading(true);
    try {
        const response = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ action: "login", username, password }),
        });

        const result = await response.json();

        if (result.status === "success") {
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("dashboard").style.display = "block";
        } else {
            document.getElementById("msg").innerText = result.message || "Invalid Credentials";
        }
    } catch (error) {
        console.error("Login Error:", error);
        document.getElementById("msg").innerText = "Connection Error. Try again later.";
    } finally {
        showLoading(false);
    }
}

// ======= LOGOUT FUNCTION =======
function logout() {
    location.reload();
}

// ======= ADD CUSTOMER FUNCTION =======
async function addCustomer() {
    const payload = {
        action: "addCustomer",
        first_name: document.getElementById("c_fn").value.trim(),
        last_name: document.getElementById("c_ln").value.trim(),
        phone: document.getElementById("c_phone").value.trim(),
        email: document.getElementById("c_email").value.trim(),
        address: document.getElementById("c_address").value.trim(),
        city: document.getElementById("c_city").value.trim(),
        state: document.getElementById("c_state").value.trim(),
        zip: document.getElementById("c_zip").value.trim(),
        service_type: document.getElementById("c_service").value.trim(),
        plan_type: document.getElementById("c_plan").value.trim(),
        frequency: document.getElementById("c_freq").value.trim(),
        price: document.getElementById("c_price").value.trim(),
    };

    showLoading(true);
    try {
        const response = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (result.status === "success") {
            alert("✅ Customer Added!");
            // Clear form inputs
            document.getElementById("addCustomer").querySelectorAll("input").forEach(input => input.value = "");
        } else {
            alert("❌ Error Adding Customer!");
        }
    } catch (error) {
        console.error("Add Customer Error:", error);
        alert("❌ Error Adding Customer!");
    } finally {
        showLoading(false);
    }
}

// ======= ADD LEAD FUNCTION =======
async function addLead() {
    const payload = {
        action: "addLead",
        name: document.getElementById("l_name").value.trim(),
        phone: document.getElementById("l_phone").value.trim(),
        email: document.getElementById("l_email").value.trim(),
        address: document.getElementById("l_address").value.trim(),
        city: document.getElementById("l_city").value.trim(),
        state: document.getElementById("l_state").value.trim(),
        zip: document.getElementById("l_zip").value.trim(),
        assigned_rep: document.getElementById("l_rep").value.trim(),
    };

    showLoading(true);
    try {
        const response = await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        if (result.status === "success") {
            alert("✅ Lead Added!");
        } else {
            alert("❌ Error Adding Lead!");
        }
    } catch (error) {
        console.error("Add Lead Error:", error);
        alert("❌ Error Adding Lead!");
    } finally {
        showLoading(false);
    }
}