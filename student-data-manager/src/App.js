import React, { useState, useEffect } from 'react';
import StudentForm from './StudentForm';
import StudentTable from './StudentTable';
import DeleteForm from './DeleteForm';
import './main.css';

function App() {
  const [students, setStudents] = useState([]);

  const fetchData = () => {
    fetch('http://localhost:3001/data')
      .then(response => response.json())
      .then(data => setStudents(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addStudent = (newStudent) => {
    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...newStudent, action: 'add' }),
    }).then(() => fetchData());
  };

  const deleteStudent = (name) => {
    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, action: 'delete' }),
    }).then(() => fetchData());
  };

  return (
    <div className="container">
      <h1>Student Data Manager</h1>
      <StudentForm addStudent={addStudent} />
      <h2>All Students</h2>
      <StudentTable students={students} />
      <h2>Remove Student(s)</h2>
      <DeleteForm deleteStudent={deleteStudent} />
    </div>
  );
}

export default App;

