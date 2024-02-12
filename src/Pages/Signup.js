import React from "react";
import "../pagecss/Signup.css";
import menlogo from "../Images/menlogo.png";
import group from "../Images/group.png";
import join from "../Images/join.png";
import { FcGoogle } from "react-icons/fc";
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import axios from '../api/Baseurl.js';

const Signup = () => {
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      phoneNumber: "",
      age: "",
      password: "",
      confirmpassword: "", // Add confirmpassword to initialValues
    },
    onSubmit: async (values) => {
      try {
        const formData = new FormData();

        const pass = values.password;
        const conPass = values.confirmpassword;

        if (pass === conPass) {
          console.log(pass);

          formData.append("username", values.username);
          formData.append("email", values.email);
          formData.append("phoneNumber", values.phoneNumber);
          formData.append("age", values.age);
          formData.append("password", values.password);

          for (const pair of formData.entries()) {
            console.log(pair[0], pair[1],"yohh");
          }

          const response = await axios.post('/signup', formData);
          console.log(response);
          if(response.data.UserData){
            navigate('/Signin')
            // navigate to login............
          }
        } else {
          console.log("wrong pass");
          // toast.error("wrong password!!");
        }


      } catch (err) {
        console.error("Error submitting form:", err);
      }
    },
  });

  return (
    <div>
      <div>
        <div className="signup-main-container">
          <form onSubmit={formik.handleSubmit}>
            <div className="left-side-box-signup">
              <img src={menlogo} className="sign-up-logo" alt="" />
              <span className="signin-p">Join Mentoons to get Started</span>
              <div className="signup-input-new">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  required
                  placeholder="eg:John Doe"
                />
                <br></br>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  placeholder="eg:johndoe@gmail.com"
                  required
                />
                <br></br>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  maxLength={10}
                  minLength={10}
                  required
                  placeholder="enter your mobile number"
                />
                <br></br>
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={formik.values.age}
                  onChange={formik.handleChange}
                  maxLength={2}
                  placeholder="Enter Your age"
                />
                <br></br>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="pass"
                  placeholder="Password"
                />
                <br></br>

                <input
                  className="pass"
                  id="confirmpassword"
                  name="confirmpassword"
                  type="password"
                  value={formik.values.confirmpassword}
                  onChange={formik.handleChange}
                  placeholder="Confrim Password"
                />
                <br></br>
              </div>
              <button type="submit" className="signup-btn">
                submit
              </button>
              <h4 className="forget">Forgot Password?</h4>
              <h2>
                Have an account? <Link to="/Signin">Sign in</Link>
              </h2>

              <div className="facebook-login-new">
                <div className="gog-box-new">
                  <h3>Sign in with google</h3>
                  <FcGoogle className="gog-icon" />
                </div>
              </div>
            </div>
          </form>

          <div className="right-side-box">
            <img src={join} className="logo-signup-new" alt="" />
            <img src={group} className="group-image-signup" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;