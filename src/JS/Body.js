import Footer from "./Footer";
import '../CSS/Body.css';
import Content from './Content.js';
import Body6c from "./Body6c";
import imgbg from "../IMG/bg.png"

function Body() {
    return (
      <div className="Body">
        <div className="Body-Total">
            <img src={imgbg} className="imgbg"/>
            <div className="extra-1"></div>
            <Body6c />
            
            
            <div className="wwae" >
              <h1 className="wwaehead" >WHY WORK AT EDNUM</h1>
              <h2 className="wwaehead2">REASONS</h2>
              <div className="center">
                <div className="Reasons1">
                  <h2>1.Don't Settle For Just Any Job!</h2>
                  <p>
                    It is said that success will chase after those who chase after greatness.
                    We invite you to join us on that pursuit of doing something meaningful with our talents, of daring to dream big and betting on our hard work while we can afford to
                  </p>
                </div>
                <div className="Reasons2">
                  <h2>2.We are doing interesting Work</h2>
                  <a href={"https://www.ednams.com/"}>
                    <button className="buttonclass">SEE HOME</button>
                  </a>
                </div>
                <div className="Reasons3">
                  <h2>3.We believe Our Values make us valuable </h2>
                  <p>1.Being Compassionate & Respectful to people</p>
                  <p>2.Being Sincere & Resolute in work</p>
                  <p>3.Having fun learning , and Learning to have fun</p>
                </div>
              </div>
              <div className="Reasons4">
                <h2>4. We Compensate ourselves well </h2>
              </div>
            </div>

            <Content />
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    );
  }
  
  export default Body;