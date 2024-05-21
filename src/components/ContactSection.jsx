import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputChecker = () => {
    if (formData.name === "") {
      setErrorMessage("Please enter a name.");
    }
    if (formData.email === "") {
      setErrorMessage("Please enter a email.");
    }
    if (formData.message === "") {
      setErrorMessage("Please enter a message.");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrorMessage("Email is invalid");
      return;
    }
    console.log(formData);
  };

  return (
    <section>
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onClick={inputChecker}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onClick={inputChecker}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onClick={inputChecker}
          required
        />
        <button type="submit">Submit</button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
