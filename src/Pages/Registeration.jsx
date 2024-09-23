import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const [userFName, setUserFName] = useState("");
  const [userLName, setUserLName] = useState("");
  const [userNickName, setUserNickName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [UserPassword, setUserPassword] = useState("");
  const [userRole, setUserRole] = useState("");

  const toastDealing = (message, type) => {
    if (type === "danger") {
      toast.error(message, {
        position: "bottom-right",
      });
    } else {
      toast.success(message, {
        position: "bottom-right",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!userFName) {
      toastDealing("First name is required", "danger");
      return;
    }

    if (!userLName) {
      toastDealing("Last name is required", "danger");
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

    if (!userNickName) {
      toastDealing("Gender is required", "danger");
      return;
    }

    if (!userRole) {
      toastDealing("Role is required", "danger");
      return;
    }


    const newUser = {
      fname: userFName,
      lname: userLName,
      nickname: userNickName,
      email: userEmail,
      password: UserPassword,
      role: userRole,
    };

    try {
      const response = await fetch(
        "https://66d806e137b1cadd8053106b.mockapi.io/Users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUser),
        }
      );
      if (response.ok) {
        toastDealing("User registered successfully!", "success");
      } else {
        throw new Error("Failed to register user.");
      }
    } catch (error) {
      toastDealing(error.message, "danger");
    }
  };

  //   const fetchCourses = async () => {
  //     try {
  //       const response = await fetch("https://66d806e137b1cadd8053106b.mockapi.io/Courses");
  //       if (response.ok) {
  //         const data = await response.json();
  //         setCourses(data);
  //       } else {
  //         throw new Error("Failed to fetch courses.");
  //       }
  //     } catch (error) {
  //       toastDealing(error.message, "danger");
  //     }
  //   };

  //   useEffect(() => {
  //     fetchCourses();
  //   }, []);

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
                placeholder="SomeOne"
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
                placeholder="Also SomeOne"
                value={userLName}
                onChange={(e) => setUserLName(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-3 mt-5">
            <label htmlFor="NickName" className="form-label">
              NickName
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Kaya khaas naam hai tumara"
              value={userLName}
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
              id="email"
              aria-describedby="emailHelp"
              placeholder="someone@something.whatever"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="********"
              value={UserPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <input
          hidden
                type="text"
                className="form-control"
                value="customer"
                onChange={(e) => setUserFName(e.target.value)}
              />
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
