module.exports = (sequelize,DataTypes) =>{

    const CommitteeMember = sequelize.define("committee_members",{
        committeeId:{
            type:DataTypes.UUID,
            allowNull:false
        },
        memberId:{
            type:DataTypes.UUID
        },
      
    })

    return CommitteeMember
}