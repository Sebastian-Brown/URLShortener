import "./Header.css";
import "./InputBox.css";
import React , { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'



const Output = () => {
    let newURL = "https://www.https://localhost:4000/I4MKkoS9S";

    const [hovered, setHovered] = useState(false);
    const handleHover = () => setHovered(!hovered);

    const [hovered2, setHovered2] = useState(false);
    const handleHover2 = () => setHovered2(!hovered2);

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
                <div className="output">
                    <p className="formTitle">Short URL:</p>
                    <input className="outputBox rounded-[10px] bg-opacity-10 border-solid border-2 border-gray-900" id="newURL" type="text" value={newURL} readOnly={true}/>
                    <div className="btn">
                        <button 
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover} 
                            onClick={reloadPage}>Refresh <FontAwesomeIcon className={hovered ? 'fa-spin' : ''} 
                            icon={faArrowsRotate} />
                        </button>
                        <button 
                            className="copyBtn"
                            onMouseEnter={handleHover2}
                            onMouseLeave={handleHover2}
                            onClick={copyFunction}>copy <FontAwesomeIcon className={hovered2 ? 'fa-bounce' : ''}
                            icon={faCopy} />
                        </button><span className="tooltip">copied</span>
                    </div>
                </div>
            </div>
        )
}

export default Output;