// Creating variable for HTML Element
let form = document.getElementById('myform');
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let addr = document.getElementById('addr');
let pin = document.getElementById('pin');
let state = document.getElementById('state');
let country = document.getElementById('country');
let tbody = document.getElementById('tbody');


//Submit Even Listener
form.addEventListener('submit',(event)=>{
event.preventDefault(); // Method to avoid auto form load
let tablerow = document.createElement('tr');
tablerow.innerHTML = `<td>${fname.value}</td><td>${lname.value}</td><td>${addr.value}</td><td>${pin.value}</td><td>${genderf()}</td><td>${food()}</td><td>${state.value}</td><td>${country.value}</td>`
tbody.append(tablerow);
document.getElementById("myform").reset();

})

// Function for Radio Button

function genderf(){
let gender = document.getElementsByName('gender');
for (let gvalue of gender) {
    if(gvalue.checked)    
    return gvalue.value;
}}

// Function for Check Box

function food() {
    let food = document.getElementsByName("food");
    let dish = " ";
    for (let x of food) {
      if (x.checked) {
        dish = x.value +" "+ dish;
      }
    }
    console.log(food);
    return dish;
  }

// Function to clear the table data

let clearAll = document.getElementById('clearall');
clearAll.addEventListener('click',clear);
function clear(){
    console.log('test');
tbody.innerHTML = ""; 
}
