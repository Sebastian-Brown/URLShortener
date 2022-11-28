import "./Header.css";
import "./InputBox.css";
import { useInView } from 'react-intersection-observer'
import React, {useState} from "react";
import {spinModels} from "./App.js";

const InputBox = () => {

    const {ref: myRef, inView: myElementIsVisible} = useInView();
    console.log('myElementIsVisible', myElementIsVisible);

    const [URL, setURL] = useState("");

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
    }

    return (
        <div>
            <div className="InputBox">
            <span className={`${myElementIsVisible ? 'animationForInputBox' : 'hidden'}`}>
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

            </span>
            </div>
            <p ref={myRef} className="Placeholder font-poppins
        font-semibold
        text-white">placeholder</p>
        </div>
    )
}

export default InputBox;