import "./index.css";
import "./Header.css";
import "./App.css";

const Header = () => {
  return (
    
          <div className="pageHeader font-poppins
          font-semibold text-white">
            <h1>Hello, Welcome to</h1>
            <div className="urlShort 
            bg-discount-gradient rounded-[10px] bg-opacity-10 border-solid border-2 border-gray-900">
              <h1 className="text-gradient ">URL Shortener</h1>
            </div>
            <h1 className="moveScrollDownText animate-bounce text-[20px] my-20">
            Scroll Down to Continue <span className="text-[30px]">&#8595;</span>
            </h1>
          </div>

  );
};

export default Header;
