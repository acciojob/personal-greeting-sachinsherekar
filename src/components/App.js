
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[greet,setGreet]=useState();
  const handleChange=(event)=>{
    console.log(event.target.value);
    setGreet(event.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        Enter your name: 
        <br/>
        <input type="text" onChange={handleChange}/>
        <p>{greet && `Hello ${greet}!`}</p>
    </div>
  )
}

export default App
