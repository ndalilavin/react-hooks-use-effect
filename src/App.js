import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  
  useEffect(() => {
    document.title =text;
  }, [text]);
  
  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
     //console.log("useEffect called");
    
  }, []);

  console.log("Component rendering");

  return(
    <>
    <button onClick={() => setCount((count) => count + 1 )}>I've been clicked {count} times</button>
    <input 
    type = "text" 
    placeholder="Type away..." 
    value= {text}
    onChange={(event) => setText(event.target.value)}/>
    </>
  ) 
}

export default App;
