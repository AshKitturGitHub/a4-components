// src/StudentTable.js
import React from 'react';

function StudentTable({ students }) {
  return (
    <table id="studentTable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Year</th>
          <th>Grade</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={`${student.name}-${student.age}`}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.year}</td>
            <td>{student.grade}</td>
            <td>{student.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;
