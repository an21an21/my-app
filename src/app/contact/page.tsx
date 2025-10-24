"use client";

import { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    setResult(data.data);
    console.log(data);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Send</button>
      </form>

      {result && (
        <pre style={{ background: "#f4f4f4", padding: 10 }}>
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </>
  );
};
export default Contact;
