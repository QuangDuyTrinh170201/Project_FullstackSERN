const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sequelize_check", "root", null, {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

// try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully. ');
// }catch(error){
//     console.error("unable to connect to database: ", error);
// }

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully. ");
  } catch (error) {
    console.error("unable to connect to database: ", error);
  }
};

module.exports = connectDB;
