const { Sequelize } = require("sequelize")
const con = new Sequelize("db_sistema_login","root","",{
    host: "localhost",
    dialect: "mysql",
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    timezone: "-03:00"
})

try{
    con.authenticate()
    console.log('Conectado ao BD')
}catch{
    console.log(`Erro de conexao: ${error}`)
}