import React from "react";
import "../pagecss/signin.css";
import menlogo from "../Images/menlogo.png";
import group from "../Images/group.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link,useNavigate } from "react-router-dom";
import { useFormik ,Formik} from "formik";
import axios from '../api/Baseurl.js';
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { setTokens,setUserDetails } from "../redux/action/reducer/userReducer.js";
const Signin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: async () => {
      try {
        const formData = new FormData();

        formData.append("email", formik.values.email);
        formData.append("password", formik.values.password);

        for (const pair of formData.entries()) {
          console.log(pair[0], pair[1], "yohh");
        }

        const response = await axios.post('/login', formData);
        console.log(response);
        if (response.data.status) {
          // Update Redux store with user details and token
          dispatch(setUserDetails(response.data.userData));
          console.log(response.data.userData,"userdata");
          dispatch(setTokens(response.data.Token));
          console.log(response.data.Token, "token");
          var Tok = response.data.Token
          navigate('/')
          // Redirect or perform other actions on successful login

        } else {
          // Handle unsuccessful login (invalid credentials, etc.)
          // setFieldError("password", "Invalid email or password");
          console.log("invalid email or password!!");
        }

      } catch (err) {
        console.error("Error submitting form:", err);
        navigate('/')
      }
    },
    
  
  });

  return (
    <div>
      <div className="signin-main-container-new">
        <form onSubmit={formik.handleSubmit}>
          <div className="left-side-box">
            <h1>Welcome Back</h1>
            <p className="signin-p">Sign in to continue</p>

            <div className="signin-input-new">
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Email ID"
              />
              <br></br>
              <input
                className="pass"
                type="password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Password"
              />

              <span className="forget-login">Forgot Password?</span>
            </div>

            <button type="submit" className="signin-btn">
              Submit
            </button>

            <h2>
              Not a Member?{" "}
              <Link to="/Signup">
                <a href="">Click here</a>{" "}
              </Link>
            </h2>

            <div className="facebook-login">
              <div className="gog-box">
                <FcGoogle className="gog-icon" />
                <h3>Sign in with google</h3>
              </div>
            </div>
          </div>
        </form>

        <div className="right-side-box-new">
          <img src={menlogo} className="logo-signin" alt="" />
          <img src={group} className="group-image-signin" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signin;