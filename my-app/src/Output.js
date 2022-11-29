import "./Header.css";
import "./InputBox.css";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-solid-svg-icons'



const Output = () => {
    let newURL = "https://www.https://localhost:4000/I4MKkoS9S";

    function copyFunction() {
        let copyText = document.getElementById("newURL");
        const tooltip = document.querySelector(".tooltip");
        console.log(copyText.value);
      
        // Select the text field
        copyText.select();
        copyText.setSelectionRange(0, 99999); // For mobile devices
      
         // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);
      
        tooltip.classList.add("show");
           setTimeout(function(){
             tooltip.classList.remove("show");
           },700);
      }

      function reloadPage() {
        window.location.reload()
      }

        return (
            
            <div className="font-poppins font-semibold 
            text-white animationForInputBox">
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.1/css/all.css" crossorigin="anonymous"></link>
                <p className="formTitle">Short URL:</p>
                <input className="outputBox rounded-[10px] bg-opacity-10 border-solid border-2 border-gray-900" id="newURL" type="text" size={42} value={newURL} readOnly={true}/>
                <div className="btn">
                    <button onClick={reloadPage}>Refresh</button>
                    <button className="copyBtn" onClick={copyFunction}>copy <FontAwesomeIcon icon={faCopy} /></button><span className="tooltip">copied</span>
                </div>
            </div>
        )
}

export default Output;