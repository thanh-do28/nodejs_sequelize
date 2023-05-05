const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('store', 'root', "123456789", {
  host: 'localhost',
  dialect: 'mysql',
  logging: false,
});

const connectionDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

connectionDatabase()