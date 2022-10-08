

const header = () => {
    let headerHolder = document.createElement("header")
  let headerImg = document.createElement("img")  
  headerImg.src = "header.svg"
  headerImg.style.width = "100vw"
  headerHolder.appendChild(headerImg)
  document.body.appendChild(headerHolder)
}

const image = () => {
    let imgHolder = document.createElement("div")
    imgHolder.id ="holder"
    let img = document.createElement("img")
    let imgText = document.createElement("p")
    imgText.innerText = "Product image color may not be shown in color purchased."
    img.src = "patmerch.jpeg"
    img.style.width = "50vw"
    imgHolder.appendChild(img)
    imgHolder.appendChild(imgText)
    document.body.appendChild(imgHolder)
}








const form = () => {
let form = document.createElement("form")
form.setAttribute("id", "form")
// name setting up 
let nameInput = document.createElement("INPUT");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("name", "name");
nameInput.setAttribute("placeholder", "First Name *");
nameInput.setAttribute("id", "name");
nameInput.required = true;
// email setting up 
let emailInput = document.createElement("INPUT");
emailInput.setAttribute("type", "email");
emailInput.setAttribute("placeholder", "Email *");
emailInput.setAttribute("id", "email");
emailInput.required = true;
// comment setting up 
let commentInput = document.createElement("TEXTAREA");
commentInput.setAttribute("type", "text");
commentInput.setAttribute("id", "comment");
commentInput.setAttribute("cols", "60");
commentInput.setAttribute("rows", "8");
commentInput.setAttribute("placeholder", "Write a detailed review here. Tell us and other customers what’s working for you and what isn’t.*");

let button = document.createElement("button");
button.setAttribute("type", "submit");
button.textContent="Submit Your Review"
form.appendChild(nameInput)
form.appendChild(emailInput)
form.appendChild(commentInput)

form.appendChild(button)
document.body.appendChild(form)
}




header()
image()
form()









export default "./style.js"