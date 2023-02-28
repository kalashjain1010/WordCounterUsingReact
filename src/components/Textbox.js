import React, {useState} from "react";

export default function Textbox(props) {
    
    const [text,setText]= useState("enter text here");
        return (
            
            <>
      <div className="heading  mt-5 mx-5 ">Enter Text Below- {text}</div>
       <div className="form-floating mt-1  mx-5">
        <textarea className="form-control w-75 p-3 " placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '200px'}} defaultValue={""} />
       <div >
         <button type="button" class="btn btn-primary my-2 ml-5">To upper Case</button>
        <button type="button" class="btn btn-primary my-2 mx-2">To lower Case</button>
        <button type="button" class="btn btn-primary ml-5 ">clear</button>

        </div>
      </div>
      </>
    );
}



