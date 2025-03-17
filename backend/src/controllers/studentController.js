const Student = require('../models/student');

exports.addStudent = async (req, res) => {
    const { name, email, rollNumber, department, year } = req.body;
  
    try {
      const newStudent = new Student({
        name,
        email,
        rollNumber,
        department,
        year
      });
  
      await newStudent.save();
      res.status(201).json({ message: 'Student added successfully', student: newStudent });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  exports.getStudents = async (req, res) => {
    try {
      const students = await Student.find();
      res.status(200).json(students);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };