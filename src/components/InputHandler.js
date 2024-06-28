import React, { useState, useEffect } from "react";
import { Input, Button } from "antd";

const InputHandler = ({ onSubmit, editMode = false, initialData = {} }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (editMode && initialData) {
      setName(initialData.name || "");
      setEmail(initialData.email || "");
    }
  }, [editMode, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    if (!name.trim()) {
      setNameError("Please enter a valid name");
      return;
    } else {
      setNameError("");
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    onSubmit({ name, email });
    if (!editMode) {
      setName("");
      setEmail("");
    }
  };

  const validateEmail = (email) => {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="input-handler" style={{ padding: 10, width: 300 }}>
      <div style={{ marginBottom: 8 }}>
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ border: "2px solid black", marginBottom: 7, color: "black" ,padding: 7,'::placeholder': { color: 'black',fontWeight: 'bold' } }}
        />
        {nameError && <p style={{ color: "red", margin: 0 }}>{nameError}</p>}
      </div>
      <div style={{ marginBottom: 8 }}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ border: "2px solid black", marginBottom: 10, color: "black" ,padding: 7}}
        />
        {emailError && <p style={{ color: "red", margin: 0 }}>{emailError}</p>}
      </div>
      <div>
        <Button type="primary" onClick={handleSubmit} style={{ width: "30%"}}>
          {editMode ? "Edit user" : "Add user"}
        </Button>
      </div>
    </div>
  );
};

export default InputHandler;
