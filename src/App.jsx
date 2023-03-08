import React from "react";
import { useState } from "react";

export default function App() {
 const getTime = new Date().toLocaleTimeString();
  let [count, setCount] = useState(getTime);
  setInterval(() => {
    setCount(new Date().toLocaleTimeString());
  },1000);
  

  return (
    <div className="main">
      <h1>Current Time</h1>
      <h1>{count} </h1>
      
    </div>
  );
}
