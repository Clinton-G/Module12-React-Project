import React, { useState, useEffect } from 'react';

const UpdateUser = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setUserData({
        username: storedUser.username,
        email: storedUser.email,
        password: storedUser.password,
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userData.username || !userData.email || !userData.password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to update user.');
      }

      const data = await response.json();
      sessionStorage.setItem('user', JSON.stringify(data));
      console.log('User updated:', data);
    } catch (error) {
      setError('Failed to update user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Update User</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateUser;
