const config = require("../config/config.js")

const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize(
    config.DB_NAME,
    config.USERNAME,
    config.PASSWORD,{
        host: config.HOST,
        dialect:config.dialect,
        operatorsAliases:false,
        pool:{
            max:config.pool.max,
            min:config.pool.min,
            acquire:config.pool.acquire,
            idle:config.pool.idle
        }
    }
)

// const sequelize = new Sequelize(config.DB_NAME, config.USERNAME,   config.PASSWORD, {
//     host: 'localhost',
//     dialect: 'mysql'});

//authenticate connection
sequelize.authenticate()
.then((e)=>{
console.log("connect", {e});
}).catch(err => console.log(err))

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.products = require('./peopleModel.js')(sequelize,DataTypes)
// db.members = require('./memberModel.js')(sequelize,DataTypes)
db.commitee = require('./commiteeModel.js')(sequelize,DataTypes)

db.sequelize.sync({force:false})
.then(()=>{
    console.log('Sync completed');
})
.catch(err =>console.log(err))


module.exports = db