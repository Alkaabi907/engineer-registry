require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./app')

const PORT = process.env.PORT || 3000

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.once('open', () => {
  console.log('Connected to MongoDB')
})

db.on('error', (error) => {
  console.error('MongoDB connection error:', error)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`) })