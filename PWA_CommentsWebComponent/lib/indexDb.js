

import { openDB } from "idb";


export const database = openDB("CommentsStore", 2, {
  upgrade(db){
    db.createObjectStore("comments", { keyPath:"email",
     
    // autoIncrement: true

    });
  }
})