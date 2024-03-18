const mongoose = require('mongoose');

require("dotenv").config();

const connectdb = () => {

    mongoose.connect(process.env.DATABASE_URL)
        .then(() => { console.log("DataBase Connected successfully") })
        .catch((err) => {
            console.log("db is not connected");
            console.log(err);
            process.exit(1);
        })
};

module.exports = connectdb;