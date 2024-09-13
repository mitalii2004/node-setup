const Sequelize = require("sequelize")
//username---root password---- mitali@202018
const sequelize = new Sequelize('cqlsys1', 'root', 'mitali@202018', {
    host: 'localhost',
    dialect: "mysql",
});
const connectionDB = async () => {
    await sequelize.authenticate()
        .then(async() => {
            await sequelize.sync({ alert: false });
            console.log('db connected and sync')
        }).catch((err) => {
            console.log(err)
        })
}
module.exports = {
    sequelize: sequelize,
    connectionDB: connectionDB
}

//hhh
