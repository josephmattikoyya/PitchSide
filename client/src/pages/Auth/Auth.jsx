import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthAction";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading)
  const [isSignUp, setIsSignUp] = useState(true);
  console.log(loading)
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmpass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      setData.password === data.confirmpassword
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      {/*left side*/}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>PITCHSIDE</h1>
          <h6>KEEP IN TOUCH WITH THE GAME</h6>
          <h6>EVEN AFTER THE FINAL WHISTLE</h6>
        </div>
      </div>
      {/*right side*/}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "SIGN UP" : "LOG IN"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                style={{ color: "var(--green)" }}
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                style={{ color: "var(--green)" }}
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              style={{ color: "var(--green)" }}
              placeholder="Username"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              style={{ color: "var(--green)" }}
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                style={{ color: "var(--green)" }}
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
              display: confirmpass ? "none" : "block",
            }}
          >
            * Passwords Do Not Match
          </span>
          <div>
            <span
              style={{
                color: "var(--white)",
                fontSize: "12px",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already Have an Account? Log in"
                : "Dont't Have an Account? Sign up"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading ? "LOADING..." : isSignUp ? "SIGN UP" : "LOGIN"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
