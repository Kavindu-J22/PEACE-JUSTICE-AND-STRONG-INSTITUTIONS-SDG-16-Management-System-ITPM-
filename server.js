require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')


const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(fileUpload({
    useTempFiles: true
}));


// Connect to MongoDB
const mongoURI = process.env.MONGODB_URL;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('HARMONY HUB MongoDB Connected Successfully!');
});

// Routes
app.use('/user', require('./routes/userRouter').default);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`HARMONY HUB Server is Now running on port ${PORT}`);
});