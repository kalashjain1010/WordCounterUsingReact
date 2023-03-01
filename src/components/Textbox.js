import React, { useState } from "react";

export default function Textbox(props) {
  const upCase = () => {
    console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowCase = () => {
    console.log("clicked low");
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    console.log("clicked clear");
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("clicked DFSDGAFDAASF");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="heading  mt-5 mx-5 ">Enter Text Below</div>
      <div className="form-floating mt-1  mx-5">
        <textarea
          className="form-control w-75 p-3 "
          value={text}
          onChange={handleOnChange}
          id="floatingTextarea2"
          style={{ height: "200px" }}
          defaultValue={""}
        />
        <div>
          <button
            type="button"
            className="btn btn-dark my-2 ml-5"
            onClick={upCase}
          >
            To upper Case
          </button>
          <button
            type="button"
            className="btn btn-dark my-2 mx-2"
            onClick={lowCase}
          >
            To lower Case
          </button>
          <button
            type="button"
            className="btn btn-danger ml-5 "
            onClick={clear}
          >
            clear
          </button>
        </div>
      </div>
      <div className="mx-5 my-3">
        <h3> counting words and characters</h3>
        {text.split(" ").filter((word) => word !== "").length} words and{" "}
        {text.length} Characters
      </div>
    </>
  );
}
