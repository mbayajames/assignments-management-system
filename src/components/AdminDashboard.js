import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChalkboardTeacher, FaPlus, FaList } from 'react-icons/fa';


const AdminDashboard = () => {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    title: '',
    description: '',
    dueDate: '',
    subject: '',
    grade: '',
    points: '',
  });

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/assignments');
        console.log('API Response:', response.data);
        setAssignments(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error('Error fetching assignments:', error);
        setAssignments([]);
      }
    };

    fetchAssignments();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment({ ...newAssignment, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/admin/assignments', newAssignment);
      const response = await axios.get('http://localhost:5000/admin/assignments');
      setAssignments(Array.isArray(response.data) ? response.data : []);
      setNewAssignment({ title: '', description: '', dueDate: '', subject: '', grade: '', points: '' });
    } catch (error) {
      console.error('Error creating assignment:', error);
    }
  };

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-header">
        <FaChalkboardTeacher className="icon" /> Admin Dashboard
      </h1>

      {/* Assignment Creation Form */}
      <form onSubmit={handleSubmit} className="assignment-form">
        <h2>
          <FaPlus className="icon" /> Create New Assignment
        </h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={newAssignment.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={newAssignment.description}
          onChange={handleInputChange}
          required
        />
        <input
          type="date"
          name="dueDate"
          value={newAssignment.dueDate}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newAssignment.subject}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={newAssignment.grade}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="points"
          placeholder="Points"
          value={newAssignment.points}
          onChange={handleInputChange}
          required
        />
        <button type="submit" className="submit-button">
          <FaPlus className="icon" /> Create Assignment
        </button>
      </form>

      {/* Assignment List */}
      <div className="assignment-list">
        <h2>
          <FaList className="icon" /> Assignments
        </h2>
        {Array.isArray(assignments) && assignments.length > 0 ? (
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment._id} className="assignment-item">
                <h3>{assignment.title}</h3>
                <p>{assignment.description}</p>
                <p><strong>Due:</strong> {new Date(assignment.dueDate).toLocaleDateString()}</p>
                <p><strong>Subject:</strong> {assignment.subject}</p>
                <p><strong>Grade:</strong> {assignment.grade}</p>
                <p><strong>Points:</strong> {assignment.points}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-assignments">No assignments found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;