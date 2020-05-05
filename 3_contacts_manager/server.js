const express = require('express');
const connectDb = require('./config/database');
const userRoutes = require('./routes/users');

const app = express();

const port = process.env.PORT || 5000;

//Connect with database
connectDb();

app.get('/', (req, res) => res.json({ message: 'Hi! Welcome to Contacts Manager' }));

// Using middleware
app.use(express.json({ extended: false}));

// Routes 
app.use('/api/users', userRoutes);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

app.listen(port, () => console.log(`Server started on port ${port}`));