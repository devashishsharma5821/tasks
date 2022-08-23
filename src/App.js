import "./App.css";
import Form from "./components/form";
import logo1 from "./images/google.png";
import logo2 from "./images/facebook.png";
import logo3 from "./images/twitter.png";

function App() {
  return (
    <div className="container">
      <div className="sub-container">
        <h2>Sign Up #06</h2>
      </div>
      <div className="form">
        <div className="left-container">
          <div className="left-sub-container">
            <h2>Welcome to signup form</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-sub-container">
            <div>
              <h3>Signup with this services</h3>
              <p className="logo-container">
                <div className="first-logo-container">
                  <a>
                    <img src={logo1} className="first-logo"></img>
                  </a>
                </div>
                <div className="second-logo-container">
                  <a>
                    <img src={logo2} className="first-logo"></img>
                  </a>
                </div>
                <div className="third-logo-container">
                  <a>
                    <img src={logo3} className="first-logo"></img>
                  </a>
                </div>
              </p>
              <p className="break"></p>
              <h6>or</h6>
            </div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
