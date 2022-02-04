const People = require("./peopleModel")
module.exports = (sequelize,DataTypes) =>{

    const CommitteeMember = sequelize.define("committee_members",{
        committeeId:{
            type:DataTypes.UUID,
            allowNull:false
        },
        memberId:{
            type:DataTypes.UUID
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

   const people =  People(sequelize,DataTypes)
   
   people.hasMany(CommitteeMember,{foreignKey:{
       name:"memberId"
   }})
   CommitteeMember.belongsTo(people,{foreignKey:{
    name:"memberId"
}});

    return CommitteeMember
}
