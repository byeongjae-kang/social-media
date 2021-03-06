import axios from "axios";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      };
      try {
        await axios.post("/auth/register", user);
        history.push('/login')
      }catch(err) {
        console.log(err)
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SocialMedia</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on SocialMedia
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={submitHandler}>
            <input
              placeholder="Username"
              ref={username}
              required
              className="registerInput"
            />
            <input
              placeholder="Email"
              ref={email}
              required
              className="registerInput"
              type="email"
            />
            <input
              placeholder="Password"
              ref={password}
              required
              className="registerInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              required
              className="registerInput"
              type="password"
              minLength="6"
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <button className="registerRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
