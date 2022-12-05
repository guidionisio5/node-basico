// importação do modulo mysql2
//  npm i mysql2
const mysql2 = require('mysql2')

module.exports = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_node"
})