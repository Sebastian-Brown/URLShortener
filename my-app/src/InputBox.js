import "./InputBox.css";
import { useInView } from 'react-intersection-observer'

const InputBox = () => {

    const {ref: myRef, inView: myElementIsVisible} = useInView();
    console.log('myElementIsVisible', myElementIsVisible);

    return (
        <div>
            <div className="InputBox">
            <span className={`${myElementIsVisible ? 'animationForInputBox' : 'hidden'}`}>
                <form className="form">
                    <p className="font-poppins
                    font-semibold text-[72px]
                    text-white">Enter Your URL:</p>

                    <input type="url" name="url" id="url"
                    placeholder="https://example.com"
                    pattern="https://.*" size="30"
                    required>
                    </input>

                    <button className="font-poppins
                    bg-discount-gradient rounded-[10px] bg-opacity-10 border-solid border-2
                    border-gray-900 button button1">Submit</button>
                </form>

            </span>
            </div>
            <p ref={myRef} className="Placeholder font-poppins
        font-semibold text-[72px]
        text-white">placeholder</p>
        </div>
    )
}

export default InputBox;