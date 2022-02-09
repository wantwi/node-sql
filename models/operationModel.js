
module.exports = (sequelize,DataTypes) =>{

    const Operation = sequelize.define("operation",{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
          },
        operationId: {
            type: DataTypes.UUID,
            primaryKey: true,
        },
        month: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        year: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        week1:{
            type:DataTypes.INTEGER,
        },
        week2:{
            type:DataTypes.INTEGER,
        },
        week3:{
            type:DataTypes.INTEGER,
        },
        week4:{
            type:DataTypes.INTEGER,
        },
        week5:{
            type:DataTypes.INTEGER,
            },
      
        accountId: {
            type: DataTypes.UUID,
          },
        currentUserId: {
            type: DataTypes.UUID,
          },
      
    })
   

    return Operation
}