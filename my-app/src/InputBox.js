import "./Header.css";
import "./InputBox.css";
import { useInView } from 'react-intersection-observer'
import React, {useState} from "react";
import {spinModels} from "./App.js";
import Output from "./Output.js";

const InputBox = () => {

    const {ref: myRef, inView: myElementIsVisible} = useInView();

    const [URL, setURL] = useState("");

    const [show, setShow] = useState(false);

    function handleURLSubmit(e) {
        e.preventDefault();
        spinModels()
        fetch("http://localhost:4000/shortUrl", {
            method: 'POST',
            body: JSON.stringify({
                URL,
            }),
            headers: {
                "Content-Type": "application/json",
            }
        });
        setTimeout(() => {
            setShow(!show);
          }, "5000")
    }

        return (
            <div>
                
                <div className="InputBox">
                <span className={`${myElementIsVisible ? 'animationForInputBox' : 'hidden'}`}>
                {!show && (
                    <form onSubmit={handleURLSubmit} method="POST" className="form">
                        <p className="formTitle font-poppins font-semibold 
                        text-white">Enter Your URL:</p>

                        <input value={URL} onChange={e => setURL(e.target.value)}
                        type="url" name="fullUrl" id="full-URL"
                        placeholder="https://example.com"
                        pattern="https://.*" size={25}
                        required>
                        </input>
                        
                        <button className="font-poppins
                        bg-discount-gradient rounded-[10px] bg-opacity-10 border-solid border-2
                        border-gray-900 button button1">Submit</button>
                    </form>
                )}
                {show && (
                    <Output/>
                )}
                </span>
                </div>
                <p ref={myRef} className="Placeholder font-poppins
            font-semibold
            text-white">placeholder</p>
            </div>
        )
}

export default InputBox;