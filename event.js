/*// create a Element
const label = document.createElement("label");
const breaks = document.createElement("br");
const input = document.createElement("input");
const button = document.createElement("button");
document.body.append(label, breaks, input, button);

// Add Attributes to Element

label.setAttribute("for", "email");
label.innerText = "Email";
input.setAttribute("type", "email");
input.setAttribute("id", "email");
input.setAttribute("placeholder", "enter a E-mail Id");
button.addEventListener("click", foo);
button.className = "btn";
function foo() {
  const ress = document.querySelector("#email").value;
  console.log(ress);
}*/

// ---------Use Prompt to read a value from user and display it in span tag------------

const button = document.createElement("button");
const span = document.createElement("span");
button.innerText = "Click here";
button.addEventListener("click", fooo);
document.body.append(button,span);

function fooo() {
  const resss = prompt("Enter a text");
  span.innerText=resss;
}

//--------------------------------------------------------