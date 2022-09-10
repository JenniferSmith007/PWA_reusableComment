// Declaring variables and creating form 



// form setting up 
let form = document.createElement("form")
form.setAttribute("id", "form")


// name setting up 
let nameInput = document.createElement("INPUT");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "name");
nameInput.setAttribute("id", "name");
nameInput.required = true;

// email setting up 
let emailInput = document.createElement("INPUT");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "email");
emailInput.setAttribute("id", "email");
emailInput.required = true;




// comment setting up 
let commentInput = document.createElement("TEXTAREA");
commentInput.setAttribute("type", "text");
commentInput.setAttribute("id", "comment");
commentInput.setAttribute("cols", "60");
commentInput.setAttribute("rows", "8");
commentInput.setAttribute("placeholder", "Write a detailed review here. Tell us and other customers what’s working for you and what isn’t.*");


// setting up checkbox 
let label = document.createElement("p");
label.textContent = 'By checking this box your review will be posted public.';
label.setAttribute("for", "post")
let checkbox = document.createElement("INPUT");
checkbox.setAttribute("type", "checkbox");
checkbox.setAttribute("id", "post");



// setting up submit button 
let button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent="submit"





form.appendChild(nameInput)
form.appendChild(emailInput)
form.appendChild(commentInput)
form.appendChild(label)
form.appendChild(checkbox)
form.appendChild(button)

document.body.appendChild(form)

export default './DomSetUp.js'