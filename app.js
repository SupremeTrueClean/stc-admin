const API = "https://script.google.com/macros/s/AKfycbwbsIbTh9xaHf1KJ_olyRBhBsp-h7rE9gfd5GvqSfy29NyyzDNF7iadLtzFmPkRaGWu3A/exec";

// ===== LOGIN =====
function login(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"login",
username:document.getElementById("username").value.trim(),
password:document.getElementById("password").value.trim()
})
})
.then(res=>res.text())
.then(res=>{
if(res==="success"){
document.getElementById("loginBox").style.display="none";
document.getElementById("dashboard").style.display="block";
}else{
document.getElementById("msg").innerText="Invalid Login";
}
})
.catch(err=>{
console.error(err);
alert("Connection error");
});
}

// ===== LOGOUT =====
function logout(){
location.reload();
}

// ===== NAVIGATION =====
function showSection(id){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

// ===== ADD CUSTOMER =====
function addCustomer(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"addCustomer",
first_name:document.getElementById("c_fn").value,
last_name:document.getElementById("c_ln").value,
phone:document.getElementById("c_phone").value,
email:document.getElementById("c_email").value,
address:document.getElementById("c_address").value,
city:document.getElementById("c_city").value,
state:document.getElementById("c_state").value,
zip:document.getElementById("c_zip").value,
service_type:document.getElementById("c_service").value,
plan_type:document.getElementById("c_plan").value,
frequency:document.getElementById("c_freq").value,
price:document.getElementById("c_price").value
})
})
.then(()=>alert("✅ Customer Added"))
.catch(()=>alert("❌ Error adding customer"));
}

// ===== ADD LEAD =====
function addLead(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"addLead",
name:document.getElementById("l_name").value,
phone:document.getElementById("l_phone").value,
email:document.getElementById("l_email").value,
address:document.getElementById("l_address").value,
city:document.getElementById("l_city").value,
state:document.getElementById("l_state").value,
zip:document.getElementById("l_zip").value,
assigned_rep:document.getElementById("l_rep").value
})
})
.then(()=>alert("✅ Lead Added"))
.catch(()=>alert("❌ Error adding lead"));
}

// ===== CREATE INVOICE =====
function createInvoice(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"createInvoice",
customer_id:document.getElementById("inv_customer").value,
job_id:document.getElementById("inv_job").value,
amount:document.getElementById("inv_amount").value
})
})
.then(()=>alert("💰 Invoice Created"))
.catch(()=>alert("❌ Error creating invoice"));
}