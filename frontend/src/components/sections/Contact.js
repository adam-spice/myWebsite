import React, { useState } from "react";

import { useHttpClient } from "../../hooks/http-hook";

const Contact = ({ contactRef }) => {
  const { isLoading, error, sendRequest } = useHttpClient();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const responseData = await sendRequest(
        "/formcontacts",
        "POST",
        JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
        { "Content-Type": "application/json" }
      );

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {}
  };

  return (
    <div ref={contactRef} className="contact">
      <h2
        className="section__title section__title--work"
        style={{ color: "var(--clr-light)", paddingTop: "1rem" }}
      >
        Contact Me
      </h2>
      <p className="section__subtitle section__subtitle--work">
        Send me a message
      </p>
      <form onSubmit={handleSubmit} className="form__contact">
        <div className="form__group field">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            required
          />
          <label htmlFor="name" className="form__label">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form__field"
            placeholder="Email"
            name="email"
            id="email"
            required
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>
        <div className="form__group field">
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            className="form__field"
            placeholder="Email"
            name="message"
            id="message"
            required
            rows={3}
          />
          <label htmlFor="message" className="form__label">
            Message
          </label>
        </div>
        <div className="form__button">
          <button className="btn">submit</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
