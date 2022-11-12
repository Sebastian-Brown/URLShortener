import "./index.css";
import "./Header.css";

const Header = () => {
  return (
          <div className="pageHeader flex-1 font-poppins
          font-semibold ss:text[72px] text-[52px]
          text-white">
            <h1>Hello, Welcome to</h1>
            <div className="urlShort 
            bg-discount-gradient rounded-[10px] bg-opacity-10 border-solid border-2 border-gray-900">
              <h1 className="text-gradient ">URL Shortener</h1>
            </div>
            <h1 className="animate-bounce text-[20px] my-20">
            Scroll Down to Continue <span className="text-[30px]">&#8595;</span>
            </h1>
          </div> 
  );
};

export default Header;
