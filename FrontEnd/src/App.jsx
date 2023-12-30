import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Create this file in the src folder and add any custom styles if needed
import CreateStudentForm from './components/CreateStudentForm';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center p-5">
        Learning Management System
        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/xsqjakgm.json"
          trigger="hover"
          style={{ width: '50px', height: '40px' }}
        ></lord-icon>
      </h1>

      <CreateStudentForm />
      <StudentList />
    </div>
  );
}

export default App;
