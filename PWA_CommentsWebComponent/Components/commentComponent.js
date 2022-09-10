import { Store } from "./store";

const store = new Store({ comments:[] });
  console.log(store);
  // create new store and want to sub to store 
  // sub to store anytime state changes subscriber is going to call method (adding comment)
  store.subscribe((state) => {
    console.log(state)
    let commentState = state.comments;
   
    commentState.forEach(subComment => document.body.appendChild(subComment))
    
  });


class CommentComponent extends HTMLElement {
    constructor() {
      super();
      this.name = ''
      this.email = ''
      this.comment = ''
  
      // to init the proper 
      // used open string later will be changed 
    }
  //  look out for attr 
  // if change then call changed att method
    static get observedAttributes() {
      return ["name", "email", "comment"];
    }
  // not talking about property but attr 
  
  // this method is to know if user adds new value, this method refelcts that value 
  // refelect the change in the js props 
  // update the prop to let it know we have the att
    attributeChangedCallback(attributeName, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[attributeName] = newValue; 
      // updating the empty string with the new value; 
      // using [] because dont quite know the atrr === this.name , this.email etc 
  
      
    }
  
    //  connected callabck is for custom element
    // add html to build custom element
    // listeners related to custom element
    // has to be related to custom element
    // no btn event listener
    // btn is not apart of the custom element
  
    connectedCallback() {
      // will be claaed fist time DOM is loaded
      this.innerHTML = `
      <p> Name:  ${this.name} </p>
      <p> email: ${this.email} </p> 
      <p> comment: ${this.comment} </p>
      `
    }
  }
  // name.email,comment are properties of JS 
  // 
  
  window.customElements.define("comment-component", CommentComponent);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    console.log(btn)
    btn.addEventListener("click", (e) => {
      e.preventDefault();
  
      let commentDisplay = document.createElement('comment-component')
      let name = document.getElementById("name").value
      let email = document.getElementById("email").value
      let comment = document.getElementById("comment").value
  
      commentDisplay.setAttribute("name", name)
      commentDisplay.setAttribute("email", email)
      commentDisplay.setAttribute("comment", comment)
      // document.body.appendChild(commentDisplay)
      
      store.addComment(store.state, commentDisplay);
    
    
     
    });
  });
  
  // export default CommentComponent
  export default "./commentComponent.js";