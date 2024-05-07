import React from "react";
import "./Login.css";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Login = () => {
  const [value, setValue] = useState();
  return (
    <main>
    <layout>
    </layout>
      <div className="container">
        <section className="text-container">
          <div>
            <div className="header">
              <h2>Welcome to SastoSales</h2>
            </div>

            <form action="#" className="form-container">
              <div className="form-label">
                <label htmlFor="number">Phone Number</label>
                  <PhoneInput
                    placeholder="Phone number"
                    value={value}
                    onChange={setValue}
                  />
              </div>

              <div className="form-label">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" />
              </div>

              <section className="bottom-container">
                <div className="check-remeber">
                  <input type="checkbox" />
                  <p>Remember me</p>
                </div>

                <div>
                  <p>
                    Don't have account yet?
                    <span className="sign_in">
                      <a href="#">Sign in</a>
                    </span>
                  </p>
                </div>
              </section>
              <hr />
              <button type="submit" className="log-in-btn">
                Log In
              </button>
              <p className="last-text">
                Don't Have An Account?<a href="#">Log In</a>
              </p>
            </form>
          </div>
        </section>

        <section className="img-section">
          <img src="./Nepal svg.png" alt="Nepal" />
        </section>
      </div>
    </main>
  );
};

export default Login;
