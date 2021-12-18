const Sequelize =  require("sequelize")

const sequelize = new Sequelize('wp_db','root','soccer2694',{
    dialect : 'mysql',
    host : 'localhost'
});


module.exports = sequelize;