
// Their is a issue

import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  let [i,seti] = useState(0);
  
  const colorchanger = () => {
    console.log(i); // Log the initial value of `i`
  
    switch (i) {
      case 0:
        setColor("#f54269");
        break;
      case 1:
        setColor("#8a42f5");
        break;
      case 2:
        setColor("black");
        break;
      case 3:
        setColor("green");
        break;
      case 4:
        setColor("orange");
        break;
      default: setColor("olive")
        break; 
    }
  
    console.log(i); // before incrementing
    seti((i+1)%5) ;
    console.log(i) //after increment
  };
  
  return (
   <div onClick={colorchanger} className="w-full h-screen duration-200" style = {{backgroundColor: color}}>
    <div className="fixed flex flex-wrap " >

      {/* <button onClick={()=>{setColor("red")}} className="btn"  style={{backgroundColor:"red"}}>Red</button>
      <button onClick={()=>{setColor("green")}} className="btn" style={{backgroundColor:"green"}}>green</button>
      <button onClick={()=>{setColor("blue")}} className="btn" style={{backgroundColor:"blue"}}>blue</button>
      <button onClick={()=>{setColor("orange")}} className="btn" style={{backgroundColor:"orange"}}>orange</button>
      <button onClick={()=>{setColor("violet")}} className="btn" style={{backgroundColor:"violet"}}>violet</button> */}
    </div>
   </div>
      
    
  )
}

export default App
