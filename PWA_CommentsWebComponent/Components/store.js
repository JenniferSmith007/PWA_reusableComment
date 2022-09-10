 export class Store {
    constructor(init ) {
      const self = this;
      // store is context 
      this.subscribers = [];
  
      this.state = new Proxy(init, {
        set(state, key, value) {
          state[key] = value;
          // w.e parent node innerHTML is null
          console.log(self.subscribers)
          self.subscribers.forEach((subscriber) => subscriber(state));
          
          console.log('this is the set method')
         
          // return true;
        },
      });
    }
    subscribe(cb) {
      if (typeof cb !== "function") {
        throw new Error("You must subscribe with a function");
      }
      console.log(this.subscribers)
    this.subscribers.push(cb);
     
    // console.log('we have subscribed')
      
      
    }
    addComment(state, value) {
  
      
      let newState = state.comments.push(value)
      // returns length of array 
      console.log(value)
      console.log(newState)
      console.log(this.state.comments)
      this.state = Object.assign(this.state, state)
      
      console.log(this.state)
      
    }
    getAllComments() {
      return this.state.comments;
    }
  
    // anytime the state changes (when a new comment comes in / delete comments .. any change to comment chnages state) 
    // only 1 sub that renders to html
  
    // 
  }
  
  

  