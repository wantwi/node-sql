module.exports = (sequelize,DataTypes) =>{

    const Committee = sequelize.define("committee",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        status:{
            type:DataTypes.BOOLEAN
        },
      
    })

    return Committee
}