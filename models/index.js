const Sequelize=require("sequelize")
const sequelize=require("../DBConnection").sequelize
module.exports={
    userModels:require("./userModel")(Sequelize,sequelize,Sequelize.DataTypes)
}