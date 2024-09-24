import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Admin = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://66f1178a41537919154f7ad2.mockapi.io/React_test/Accounts/${userId}`);
      const data = await response.json();
      
      if (data.role !== 'admin') {
        toast.error('Login required');
        navigate('/login');
      } else {
        setUser(data);
      }
    };

    fetchUser();
  }, [userId, navigate]);

  const handleLogout = () => {
   
    toast.success("Logged out successfully");
    navigate('/login');
  };


  return (
    <div>
      <h1> Welcome Tp admin Panel</h1>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

      <ToastContainer />
    </div>
  );
};

export default Admin;
