import { database } from "./indexDb";
export class Store {
  constructor(init ) {
    const self = this;
    // store is context 
    this.subscribers = [];
    database.then(async (db) => {
      this.db = db
      const comment = await db.get("comments", "comment")
      if(comment){
        for(const[key,value] of Objects.entries(comment))
        this.set[key,value]
      }
 
    })




    this.state = new Proxy(init, {
      async set(state, key, value) {
        state[key] = value;
       

          // if(self.db){
          // await self.db.add("comments", 
          // value[value.length - 1])
          // }







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
  console.log(cb)
   
  // console.log('we have subscribed')
    
    
  }
  addComment(state, value) {

    
    let newState = state.comments.push(value)
    console.log(newState)
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
