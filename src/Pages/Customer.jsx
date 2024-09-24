import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Customer = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://66f1178a41537919154f7ad2.mockapi.io/React_test/Accounts/${userId}`);
        const data = await response.json();

        if (!data || data.role !== 'customer') {
          toast.error('Login required as customer');
          navigate('/login');
          return;
        }
        
        setUser(data);
      } catch (error) {
        toast.error('Error fetching user data');
        navigate('/login');
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
      <h1>welcome to Customer panel</h1>
      <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default Customer;
