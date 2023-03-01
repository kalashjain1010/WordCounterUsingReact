// import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React, { useState } from "react";
import Navbar2 from "./components/Navbar2";
import Textbox2 from "./components/Textbox2";

function App() {
 const [mode, setMode] = useState("light");
  


 const toggleMode= () =>{
      if (mode==='light') {
        setMode('dark')
        document.body.style.backgroundColor ="#222425"

      }
      else{
        setMode('light')
        document.body.style.backgroundColor ="white"
      }
 }
  return (
    <>
      <div>
        <Navbar2 mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar mode={mode} /> */}
      </div>
      <div>
        <Textbox mode={mode} />
      </div>
    </>
  );
}

export default App;
