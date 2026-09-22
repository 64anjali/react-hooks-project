import React, { useState, useContext } from "react";
import { UserContext } from '../context/UserContext';

const Login = () => {
    const {setUser}= useContext(UserContext);
  const [formData, setFormData] = useState({
    name: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData.name);

  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>

        <h2 style={styles.title}>Welcome Back</h2>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div style={styles.inputGroup}>
            <label htmlFor="name" style={styles.label}>
              Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              required
            />
          </div>


          {/* Sign In button */}
          <button type="submit" style={styles.button}>
            Change User
          </button>

        </form>

        {/* Sign Up */}
        <div style={styles.footer}>
          Don't have an account?{" "}
          <a href="#signup" style={styles.link}>
            Sign Up
          </a>
        </div>

      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
    boxSizing: "border-box",
  },

  container: {
    width: "100%",
    maxWidth: "400px",
    padding: "40px",
    border: "1px solid green",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
  },

  title: {
    textAlign: "center",
    marginTop: 0,
    marginBottom: "30px",
    fontSize: "28px",
  },

  inputGroup: {
    marginBottom: "20px",
  },

  label: {
    display: "block",
    marginBottom: "8px",
    fontSize: "14px",
    fontWeight: "500",
  },

  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    boxSizing: "border-box",
    outline: "none",
  },

  checkboxGroup: {
    display: "flex",
    alignItems: "center",
    marginBottom: "24px",
  },

  checkbox: {
    width: "16px",
    height: "16px",
    marginRight: "8px",
    cursor: "pointer",
  },

  checkboxLabel: {
    fontSize: "14px",
    cursor: "pointer",
  },

  button: {
    width: "100%",
    padding: "13px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    marginTop: "25px",
    fontSize: "14px",
  },

  link: {
    color: "#2563eb",
    textDecoration: "none",
    fontWeight: "600",
  },
};

export default Login;



