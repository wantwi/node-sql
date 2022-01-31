module.exports = (sequelize,DataTypes) =>{

    const ContributionType = sequelize.define("contribution_type",{
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

    return ContributionType
}