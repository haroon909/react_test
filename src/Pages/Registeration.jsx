import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = ({ users }) => {
  const [userFName, setUserFName] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");

  const toastDealing = (message, type) => {
    type === "danger"
      ? toast.error(message, { position: "bottom-right" })
      : toast.success(message, { position: "bottom-right" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!userFName) {
      toastDealing("Full name is required", "danger");
      return;
    }

    if (!userNickName) {
      toastDealing("Nickname is required", "danger");
      return;
    }

    if (!userEmail) {
      toastDealing("Email is required", "danger");
      return;
    }

    if (!UserPassword) {
      toastDealing("Password is required", "danger");
      return;
    }

    // Check if nickname or email already exists
    const isNicknameTaken = users.some((user) => user.nickname === userNickName);
    const isEmailTaken = users.some((user) => user.email === userEmail);

    if (isNicknameTaken) {
      toastDealing("Nickname already taken", "danger");
      return;
    }

    if (isEmailTaken) {
      toastDealing("Email already registered", "danger");
      return;
    }

    // Add user to the list (This should be sent to a backend or a mock database)
    const newUser = {
      fname: userFName,
      nickname: userNickName,
      email: userEmail,
      password: UserPassword,
    };

    console.log("User Registered: ", newUser);
    toastDealing("User registered successfully!", "success");
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-start">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              value={userFName}
              onChange={(e) => setUserFName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nickName" className="form-label">
              Nickname
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your nickname"
              value={userNickName}
              onChange={(e) => setUserNickName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={UserPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
