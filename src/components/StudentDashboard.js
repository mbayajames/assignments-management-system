import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaChalkboardTeacher, FaList } from 'react-icons/fa';


const StudentDashboard = () => {
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get('http://localhost:4000/student/assignments');
                console.log('API Response:', response.data);
                setAssignments(Array.isArray(response.data) ? response.data : []);
            } catch (error) {
                console.error('Error fetching assignments:', error);
                setAssignments([]);
            }
        };

        fetchAssignments();
    }, []);

    return (
        <div className="student-dashboard">
          <h1 className="dashboard-header">
            <FaChalkboardTeacher className="icon" /> Student Dashboard
          </h1>
    
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

export default StudentDashboard;