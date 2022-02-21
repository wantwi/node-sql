const People = require("./peopleModel")
module.exports = (sequelize,DataTypes) =>{

    const AdultClass = sequelize.define("adultclass",{
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
          },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey: true,
        },
        status:{
            type:DataTypes.INTEGER,
            defaultValue:1
        },
        leader: {
            type: DataTypes.UUID,
            allowNull:false,
          },
         
         accountId: {
            type: DataTypes.UUID,
          },
          currentUserId: {
            type: DataTypes.UUID,
          },
      
    })

  
    const people =  People(sequelize,DataTypes)
  
   
    people.hasMany(AdultClass,{foreignKey:{
        name:"leader",
        
    }})
    AdultClass.belongsTo(people,{foreignKey:{
     name:"leader"
 }});

 
   

    return AdultClass
}