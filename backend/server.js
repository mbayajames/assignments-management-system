const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const studentRoutes = require('./src/routes/studentRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', studentRoutes);

///Mongodb Connection
mongoose.connect(process.env.MONGO_URI, { userNewUrlParser: true, userUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));


//Routes
app.get('/', (req, res) => {
    res.send ('Assignments Management System Backend');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
