// StudentList.js
import React, { useState, useEffect } from 'react';
import EditStudentModal from './EditStudentModal';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editedStudent, setEditedStudent] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/user/students');
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const editStudent = async (studentId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/students/${studentId}`);
      const student = await response.json();

      // Set the edited student and show the edit modal
      setEditedStudent(student);
      setShowEditModal(true);
    } catch (error) {
      console.error('Error fetching student details for edit:', error);
    }
  };

  const handleEdit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/students/${editedStudent._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: editedStudent.name,
          age: editedStudent.age,
          grade: editedStudent.grade,
        }),
      });

      if (response.ok) {
        // Close the edit modal and fetch updated list of students
        setShowEditModal(false);
        fetchStudents();
      } else {
        console.error('Failed to update student:', response.status);
      }
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  const deleteStudent = async (studentId) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        const response = await fetch(`http://localhost:4000/api/user/students/${studentId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          // Fetch updated list of students after deletion
          fetchStudents();
        } else {
          console.error('Failed to delete student:', response.status);
        }
      } catch (error) {
        console.error('Error deleting student:', error);
      }
    }
  };

  const handleCloseEditModal = () => {
    // Close the edit modal without saving changes
    setShowEditModal(false);
    setEditedStudent(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Student List</h1>
      <ul className="list-group">
        {students.map((student) => (
          <li key={student._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{student.name}</h5>
              <p>{student.age} years old - Grade: {student.grade}</p>
            </div>
            <div>
              <button className="btn btn-warning me-2" onClick={() => editStudent(student._id)}>Edit</button>
              <button className="btn btn-danger" onClick={() => deleteStudent(student._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Render the edit modal */}
      <EditStudentModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        editedStudent={editedStudent || {}}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default StudentList;
