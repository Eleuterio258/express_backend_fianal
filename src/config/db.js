const mysql = require('mysql2');



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Maputo2022#',
    database: 'wwws'

})



 connection.connect(err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
}
);







module.exports = connection;