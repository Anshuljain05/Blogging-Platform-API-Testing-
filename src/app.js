// app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const { rateLimit } = require('./middleware/rateLimitMiddleware');
const { errorHandler } = require('./middleware/errorMiddleware');
const path = require('path');
dotenv.config({ path: path.resolve(__dirname, '../.env') });
const { PORT, MONGODB_URI } = process.env;

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.use('/auth', authRoutes);
app.use('/api', rateLimit, postRoutes);

// Error handler middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
