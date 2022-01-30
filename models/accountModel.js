const User = require("./userModel.js");

module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("account", {
    accountId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    accountUserId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    accountType: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
  });

  return Account;
};
