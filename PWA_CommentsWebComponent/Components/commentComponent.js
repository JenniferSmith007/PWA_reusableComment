// creating the custom element 

let commentComponent = document.createElement("comment-component")
commentComponent.setAttribute("name", "")
commentComponent.setAttribute("email", "")
commentComponent.setAttribute("comment", "")
commentComponent.setAttribute("id", "com")
document.body.append(commentComponent)

// creating the template 

const template = document.createElement('template'); 

template.innerHTML = `
<style></style>
<div id="comment">
<p> Name: <span id="names"></span> </p>
      <p> Email: <span id="emails"></span> </p>
      <p> Comment: <span id="comments"></span> </p>
      </div>
`;



// append the shadow dom 

class CommentComponent extends HTMLElement {

constructor(){
    super();

const shadow = this.attachShadow({mode: 'open'}); 

this.shadowRoot.appendChild(template.content.cloneNode(true)); 

shadow.append(template)

this.shadowRoot.querySelector("#name").innerText = this.getAttribute('name')
this.shadowRoot.querySelector("#email").innerText = this.getAttribute('email')
this.shadowRoot.querySelector("#comment").innerText = this.getAttribute('comment')

}




}

window.customElements.define('comment-component',CommentComponent);



















export default './commentComponent.js'