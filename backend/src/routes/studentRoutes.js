const express = require('express');
const { addStudent, getStudents } = require('../controllers/studentController');

const router = express.Router();

router.post('/students', addStudent);
router.get('/students', getStudents);

module.exports = router;