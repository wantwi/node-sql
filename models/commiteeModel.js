const CommitteeMember = require('./committeeMemberModel')
module.exports = (sequelize,DataTypes) =>{

    const Committee = sequelize.define("committee",{
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
         accountId: {
            type: DataTypes.UUID,
          },
          currentUserId: {
            type: DataTypes.UUID,
          },
      
    })

  
    CommitteeMember

   

    return Committee
}