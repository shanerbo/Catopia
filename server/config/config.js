require("dotenv").config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
    port: process.env.DB_PORT
  },
  test: {
    username: process.env.DB_DEPLOY_USERNAME,
    password: process.env.DB_DEPLOY_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_IP,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_DEPLOY_USERNAME,
    password: process.env.DB_DEPLOY_PWD,
    database: process.env.DB_NAME,
    host: process.env.DB_PATH,
    dialect: "postgres"
  }
};
