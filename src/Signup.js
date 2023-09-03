import React, { useState } from "react";
import "./Signup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    console.log(formData, "the input data is ");
  };
  return (
    <div className="signup-card">
      <h1>Registration from</h1>
      <form action="" onSubmit={handlesubmit}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={formData.firstName}
          onChange={(event) => handleInputChange(event)}
        />

        <label htmlFor="">last Name</label>
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={formData.lastName}
          onChange={(event) => handleInputChange(event)}
        />

        <label htmlFor="">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={(event) => handleInputChange(event)}
        />

        <label htmlFor="">password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={formData.password}
          onChange={(event) => handleInputChange(event)}
        />

        <button type="submit">Sign up</button>
        <div className="social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
          <FontAwesomeIcon icon={faTwitter} size="2x" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </div>
      </form>
    </div>
  );
}

export default Signup;
