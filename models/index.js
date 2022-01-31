const config = require("../config/config.js");

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  config.DB_NAME,
  config.USERNAME,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle,
    },
  }
);

//authenticate connection
sequelize
  .authenticate()
  .then((e) => {
    console.log("connect", { e });
  })
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.people = require("./peopleModel.js")(sequelize, DataTypes);
db.user = require("./userModel.js")(sequelize, DataTypes);
db.account = require("./accountModel.js", DataTypes);
db.commitee = require("./commiteeModel.js")(sequelize, DataTypes);
db.committeeMember =  require("./committeeMemberModel")(sequelize, DataTypes);
db.contributionType =  require("./contributionTypeModel")(sequelize, DataTypes);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Sync completed");
  })
  .catch((err) => console.log(err));

module.exports = db;
