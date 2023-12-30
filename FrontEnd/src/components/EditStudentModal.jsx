// EditStudentModal.js
import React, { useState } from 'react';

const EditStudentModal = ({ show, handleClose, editedStudent, handleEdit }) => {
  const [editedName, setEditedName] = useState(editedStudent.name);
  const [editedAge, setEditedAge] = useState(editedStudent.age);
  const [editedGrade, setEditedGrade] = useState(editedStudent.grade);

  const handleSaveChanges = () => {
    // Update edited student details
    editedStudent.name = editedName;
    editedStudent.age = editedAge;
    editedStudent.grade = editedGrade;

    // Call the parent handleEdit function
    handleEdit();

  };


  

  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none' }}>
      {/* Your modal content */}
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Student</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {/* Edit form fields */}
            <div className="mb-3">
              <label htmlFor="editedName" className="form-label">Name:</label>
              <input type="text" className="form-control" id="editedName" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="editedAge" className="form-label">Age:</label>
              <input type="number" className="form-control" id="editedAge" value={editedAge} onChange={(e) => setEditedAge(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="editedGrade" className="form-label">Grade:</label>
              <input type="text" className="form-control" id="editedGrade" value={editedGrade} onChange={(e) => setEditedGrade(e.target.value)} />
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
            <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditStudentModal;
