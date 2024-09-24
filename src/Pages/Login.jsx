import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://66f1178a41537919154f7ad2.mockapi.io/React_test/Accounts');
      const users = await response.json();
      const user = users.find(u => u.uname === nickname && u.password === password);

      if (user) {
        toast.success(`Welcome ${user.role}`);
        if (user.role === 'admin') {
          navigate(`/admin/${user.id}`);
        } else {
          navigate(`/customer/${user.id}`);
        }
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Error fetching users');
    }
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nickname</label>
          <input type="text" className="form-control" onChange={(e) => setNickname(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
