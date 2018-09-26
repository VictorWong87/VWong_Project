const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    userName: process.env.SQL_UNAME,
    password: process.env.SQL_PSWD,
    server: process.env.SQL_SERVER,
    options: { 
        encrypt:false, 
        database: process.env.SQL_DB,
        rowCollectionOnDone: true, // Only get row set instead of row by row
        useColumnNames: true // for easier JSON formatting
    }
};