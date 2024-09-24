import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [userFName, setUserFName] = useState("");
  const [userLName, setUserLName] = useState("");
  const [userUserName, setUserUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRole, setUserRole] = useState("customer");

  const navigate = useNavigate();

  const toastDealing = (message, type) => {
    type === "danger" ? toast.error(message) : toast.success(message);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !userFName ||
      !userLName ||
      !userEmail ||
      !userPassword ||
      !userUserName
    ) {
      toastDealing("All fields are required", "danger");
      return;
    }

    try {
      const response = await fetch(
        "https://66f1178a41537919154f7ad2.mockapi.io/React_test/Accounts"
      );
      const existingUsers = await response.json();

      const isUserNameTaken = existingUsers.some(
        (user) => user.uname === userUserName
      );
      const isEmailTaken = existingUsers.some(
        (user) => user.email === userEmail
      );

      if (isUserNameTaken) {
        toastDealing("Username not available", "danger");
        return;
      }

      if (isEmailTaken) {
        toastDealing("Email is already registered", "danger");
        return;
      }

      const newUser = {
        fname: userFName,
        lname: userLName,
        uname: userUserName,
        email: userEmail,
        password: userPassword,
        role: userRole,
      };

      const postResponse = await fetch(
        "https://66f1178a41537919154f7ad2.mockapi.io/React_test/Accounts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );

      if (postResponse.ok) {
        toastDealing("User registered successfully!", "success");
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        throw new Error("Failed to register user.");
      }
    } catch (error) {
      toastDealing(error.message, "danger");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-start">Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 mt-5 row">
            <div className="col">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={userFName}
                onChange={(e) => setUserFName(e.target.value)}
              />
            </div>
            <div className="col">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={userLName}
                onChange={(e) => setUserLName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="UserName" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              value={userUserName}
              onChange={(e) => setUserUserName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
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
              id="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
