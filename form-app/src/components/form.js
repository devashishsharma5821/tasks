import React from "react";
import "./form.css";
export default function Form() {
  return (
    <form className="form-container">
      <div className="subFormContainer first-form-container">
        <div>
          <label htmlFor="name">Full Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="name">User Name</label>
          <input type="text" />
        </div>
      </div>
      <div className="subFormContainer second-form-container">
        <label>Email Address</label>
        <input type="email" />
      </div>
      <div className="subFormContainer third-form-container">
        <label>Password</label>
        <input type="password" />
      </div>
      <div className="forth-form-container">
        {/* <div className="forthSub-form-container"> */}
          <input type="checkbox" id="checkbox" className="forth-form-input"/>
          <label htmlFor="checkbox" className="forth-form-label">
            I Agree All Statements In Term Of Service
          </label>
        {/* </div> */}
      </div>
      <div className="fifth-form-container">
        <button>Create an account</button>
      </div>
      <div className="below-form-container">
              <p className="signIn">I'm already a member!</p>
              <a href="#">Sign In</a>
            </div>
    </form>
  );
}
