import React from "react";

export default function Textbox(props) {
//   const upCase = () => {
//     console.log("clicked");
//     let newText = text.toUpperCase();
//     setText(newText);
//   };
//   const lowCase = () => {
//     console.log("clicked low");
//     let newText = text.toLowerCase();
//     setText(newText);
//   };
//   const clear = () => {
//     console.log("clicked clear");
//     let newText = "";
//     setText(newText);
//   };

//   const handleOnChange = (event) => {
//     console.log("clicked DFSDGAFDAASF");
//     setText(event.target.value);
//   };

//   const [text, setText] = useState("");
  return (
    <>
      <div className="heading  mt-5 mx-5" style={{color: props.mode==="light"?"black" :"white"}}  > Enter Text Below</div>
      
    </>
  );
}
