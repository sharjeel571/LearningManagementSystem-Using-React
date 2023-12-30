import React, { useState, useEffect } from 'react';

const CreateStudentForm = () => {
  const [formData, setFormData] = useState({ name: '', age: '', grade: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/user/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newStudent = await response.json();
        console.log('New student created:', newStudent);
      } else {
        console.error('Failed to add student:', response.status);
      }
    } catch (error) {
      console.error('Error creating student:', error);
    }
  };

  useEffect(() => {
    // Fetch and display updated list of students after a short delay
    const delay = setTimeout(() => {
      fetchStudents();
    }, 500);

    return () => clearTimeout(delay); // Clear the timeout on component unmount

  }, [formData]); // Trigger the effect when formData changes

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/user/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-3 bg-dark shadow-lg border-1 p-5 rounded-3">
      <div className="mb-3">
        <label htmlFor="name" className="form-label text-white">
          Name:
        </label>
        <input type="text" className="form-control" id="name" name="name" required onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label text-white">
          Age:
        </label>
        <input type="number" className="form-control" id="age" name="age" required onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="grade" className="form-label text-white">
          Grade:
        </label>
        <input type="text" className="form-control" id="grade" name="grade" required onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">
        Create Student
      </button>
    </form>
  );
};

export default CreateStudentForm;
