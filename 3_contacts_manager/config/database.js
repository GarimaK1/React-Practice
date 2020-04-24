//file where we connect with mongodb
const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

//promises approach
const connectDb = () => {
    mongoose.connect(db, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        .then(() => console.log('Connected to mongodb successfully!'))
        .catch((err) => {
            console.log('Error in connecting to DB! Error: ' + err);
            process.exit(1);
        });
}
/*  // async await approach
const connectDb = async () => {
    try {
        await mongoose.connect(db,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            });
        console.log('Connected to mongodb successfully!');
    } catch (error) {
        console.log('Error in connecting to DB! Error: ' + error);
        process.exit(1);
    }
}  */

module.exports = connectDb;