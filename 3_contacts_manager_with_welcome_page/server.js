const express = require('express');
const connectDb = require('./config/database');
const userRoutes = require('./routes/users');
const path = require('path');

const app = express();

const port = process.env.PORT || 5000;

//Connect with database
connectDb();

// Using middleware
app.use(express.json({ extended: false}));

// Routes 
app.use('/api/users', userRoutes);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

// Serve static assets in production
if ( process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    // Important to put this below all the other routes.
    // Because the production build will be created in 'client/build', will have index.html 
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, () => console.log(`Server started on port ${port}`));