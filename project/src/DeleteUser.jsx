import React, { useState } from 'react';

const DeleteUser = () => {
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    try {
      const user = JSON.parse(sessionStorage.getItem('user'));
      if (!user) {
        setError('No user found.');
        return;
      }

      const response = await fetch(`https://fakestoreapi.com/users/${user.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete user.');
      }

      sessionStorage.removeItem('user');
      console.log('User deleted');
    } catch (error) {
      setError('Failed to delete user. Please try again.');
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button onClick={handleDelete}>Delete Account</button>
    </div>
  );
};

export default DeleteUser;
