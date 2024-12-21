const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', 'nicolas32', {
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate();
    console.log("Banco conectado com sucesso!");
}catch(err){
    console.log(`Não foi possível conectar: ${err}`);
}

module.exports = sequelize

