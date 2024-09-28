// src/DeleteForm.js
import React, { useState } from 'react';

function DeleteForm({ deleteStudent }) {
  const [deleteName, setDeleteName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    deleteStudent(deleteName);
    setDeleteName('');
  };

  return (
    <form id="deleteForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="deleteName"
        placeholder="Enter student's name"
        required
        value={deleteName}
        onChange={(e) => setDeleteName(e.target.value)}
      />
      <button type="submit">Delete Student</button>
    </form>
  );
}

export default DeleteForm;
