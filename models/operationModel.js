const OptionType =  require("./operationTypeModel")
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
            defaultValue:0
        },
        week2:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        week3:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        week4:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        week5:{
            type:DataTypes.INTEGER,
            defaultValue:0
            },
      
        accountId: {
            type: DataTypes.UUID,
          },
        currentUserId: {
            type: DataTypes.UUID,
          },
      
    })

//     const optionType =  OptionType(sequelize,DataTypes)
//    // console.log({optionType})

//     //optionType.hasMany(Operation,)
   
//     optionType.hasMany(Operation,{foreignKey:{
//         name:"operationId"
//     }})
//     // Operation.belongsTo(optionType,{foreignKey:{
//     //  name:"id"}})
   

    return Operation
}