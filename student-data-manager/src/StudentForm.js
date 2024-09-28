// src/StudentForm.js
import React, { useState } from 'react';

function StudentForm({ addStudent }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    year: '',
    grade: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({
      name: formData.name,
      age: parseInt(formData.age),
      year: parseInt(formData.year),
      grade: parseInt(formData.grade),
    });
    setFormData({ name: '', age: '', year: '', grade: '' });
  };

  return (
    <form id="studentForm" onSubmit={handleSubmit}>
      <input type="text" id="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
      <input type="number" id="age" placeholder="Age" required value={formData.age} onChange={handleChange} />
      <input type="number" id="year" placeholder="Year" required value={formData.year} onChange={handleChange} />
      <input type="number" id="grade" placeholder="Grade" required value={formData.grade} onChange={handleChange} />
      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;
