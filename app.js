const API = “https://script.google.com/macros/s/AKfycbwbsIbTh9xaHf1KJ_olyRBhBsp-h7rE9gfd5GvqSfy29NyyzDNF7iadLtzFmPkRaGWu3A/exec”;

function login(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"login",
username:username.value,
password:password.value
})
})
.then(r=>r.text())
.then(d=>{
if(d=="success"){
loginBox.style.display="none";
dashboard.style.display="block";
}else{
msg.innerText="Login Failed";
}
});
}

function logout(){
location.reload();
}

function showSection(id){
document.querySelectorAll(".section").forEach(s=>s.style.display="none");
document.getElementById(id).style.display="block";
}

// ADD CUSTOMER
function addCustomer(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"addCustomer",
first_name:c_fn.value,
last_name:c_ln.value,
phone:c_phone.value,
email:c_email.value,
address:c_address.value,
city:c_city.value,
state:c_state.value,
zip:c_zip.value,
service_type:c_service.value,
plan_type:c_plan.value,
frequency:c_freq.value,
price:c_price.value
})
});
alert("Customer Added");
}

// ADD LEAD
function addLead(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"addLead",
name:l_name.value,
phone:l_phone.value,
email:l_email.value,
address:l_address.value,
city:l_city.value,
state:l_state.value,
zip:l_zip.value,
assigned_rep:l_rep.value
})
});
alert("Lead Added");
}

// INVOICE
function createInvoice(){
fetch(API,{
method:"POST",
body:JSON.stringify({
action:"createInvoice",
customer_id:inv_customer.value,
job_id:inv_job.value,
amount:inv_amount.value,
total:inv_amount.value
})
});
alert("Invoice Created");
}