import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React, { useState } from "react";
import Navbar2 from "./components/Navbar2";

function App() {
 const [mode, setMode] = useState("light");

 const toggleMode= () =>{
      if (mode==='light') {
        setMode('dark')
      }
      else{
        setMode('light')
      }
 }
  return (
    <>
      <div>
        <Navbar2 mode={mode} toggleMode={toggleMode}/>
        {/* <Navbar mode={mode} /> */}
      </div>
      <div>
        <Textbox />
      </div>
    </>
  );
}

export default App;
