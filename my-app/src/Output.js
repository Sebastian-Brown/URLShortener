import "./Header.css";
import "./InputBox.css";
import copy from "copy-to-clipboard";
import React , { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faArrowsRotate } from '@fortawesome/free-solid-svg-icons'


const Output = ({url}) => {
    console.log(url)

    const [hovered, setHovered] = useState(false);
    const handleHover = () => setHovered(!hovered);

    const [hovered2, setHovered2] = useState(false);
    const handleHover2 = () => setHovered2(!hovered2);

    // function copyFunction() {
    //     // let copyText = document.getElementById("newURL");
    //     const tooltip = document.querySelector(".tooltip");
    //     // console.log(copyText.value);
      
    //      // Copy the text inside the text field
    //      console.log(typeof(url))
    //     console.log(url)
    //     navigator.clipboard.writeText(url);
      
    //     tooltip.classList.add("show");
    //        setTimeout(function(){
    //          tooltip.classList.remove("show");
    //        },700);
    //   }

        const copyToClipboard = () => {
            const tooltip = document.querySelector(".tooltip");
            copy(url);

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
                    <input className="outputBox rounded-[10px] bg-opacity-10 border-solid border-2 border-gray-900" id="newURL" type="text" value={url} size={(url.length)} readOnly={true}/>
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
                            onClick={copyToClipboard}>copy <FontAwesomeIcon className={hovered2 ? 'fa-bounce' : ''}
                            icon={faCopy} />
                        </button><span className="tooltip">copied</span>
                    </div>
                </div>
            </div>
        )
}

export default Output;