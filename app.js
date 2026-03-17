const API = "https://script.google.com/macros/s/AKfycbzGA_3jz4p9zG3viSgDZnmurT_KCh5UVgiM9k2ZP9uE8adrxrXHRNjUaZNSUldUhN-pgw/exec";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "login",
      username,
      password
    })
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      document.getElementById("loginPage").style.display = "none";
      document.getElementById("dashboard").classList.remove("hidden");
    } else {
      document.getElementById("loginError").innerText = "Invalid Login";
    }
  });
}

function showSection(section) {
  document.querySelectorAll(".section").forEach(s => s.classList.add("hidden"));
  document.getElementById(section).classList.remove("hidden");
}

function addCustomer() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "addCustomer",
      name: document.getElementById("c_name").value,
      phone: document.getElementById("c_phone").value
    })
  }).then(() => alert("Customer Added"));
}

function addLead() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "addLead",
      name: document.getElementById("l_name").value,
      phone: document.getElementById("l_phone").value
    })
  }).then(() => alert("Lead Added"));
}

function createJob() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action: "createJob",
      customer_id: document.getElementById("j_customer").value,
      price: document.getElementById("j_price").value
    })
  }).then(() => alert("Job Created"));
}
